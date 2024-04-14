import { useEffect, useState } from "react";
import ShowAllVideoCards from "../ShowAllVideoCards/ShowAllVideoCards";
const AllVideoCardsContainer = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  console.log(allCategories);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 w-11/12 mx-auto">
      {allCategories?.map((category) => (
        <ShowAllVideoCards
          key={category.id}
          category={category}
        ></ShowAllVideoCards>
      ))}
    </div>
  );
};

export default AllVideoCardsContainer;
