import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

// actions
const LOADING = "LOADING";
const SET_VIDEOS = "SET_VIDEOS";
const SET_SELECTED_VIDEO = "SET_SELECTED_VIDEO";
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case SET_VIDEOS:
      return {
        ...state,
        loading: false,
        videos: [
          ...action.payload.map((video) => {
            return {
              ...video,
              videoUrl: `http://localhost:8000/public/videos/${video.filename}`,
            };
          }),
        ],
      };

    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }

  // return state;
};
export const GlobalProvider = ({ children }) => {
  const initialState = {
    videos: [],
    loading: false,
    searchText: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // get videos
  const getAllVideos = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/videos?name=${state.searchText}`
      );
      const data = await res.json();
      // console.log(data);
      dispatch({ type: SET_VIDEOS, payload: data.videos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, [state.searchText]);

  const setSearchText = (text) => {
    dispatch({ type: SET_SEARCH_TEXT, payload: text });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setSearchText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
