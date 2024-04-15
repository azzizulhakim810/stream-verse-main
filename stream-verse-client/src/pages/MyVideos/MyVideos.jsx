import { useEffect, useState } from "react";

import ShowMyUpload from "../../components/ShowMyUpload/ShowMyUpload";
const MyVideos = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // console.log(allCategories);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 w-11/12 mx-auto">
      {allCategories?.map((category) => (
        <ShowMyUpload key={category.id} category={category}></ShowMyUpload>
      ))}
    </div>
  );
};

export default MyVideos;
