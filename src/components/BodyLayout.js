import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";

const BodyLayout = () => {
  const [restroData, setRestroData] = useState([]);
  const [filteredRestroData, setFilteredRestroData] = useState([]);
  const [searchValue, setSearchValue]=useState("");
// console.log("body rendered")  //whenever state variable change,react trigger a reconsiliation cycle(re-renders the component)
  useEffect(() => {
    ApiData();
  }, []);
  const ApiData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6085642&lng=77.3561307&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
     setRestroData(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestroData(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return restroData?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="search-container">
    <div>
        <input 
        className="search" 
        type="text" 
        value={searchValue} 
        placeholder="Search" 
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}>
        </input>
        <button
        onClick={()=>{
           const filterData=filteredRestroData?.filter(restro=>
                restro?.info?.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            setRestroData(filterData); 
        }}>Search</button>  
        <button
        className="top-restro"
        onClick={() => {
          const filteredData = filteredRestroData?.filter(
            (restro) => restro?.info?.avgRating > 4.5
          );
          setRestroData(filteredData);
        }}
      >
        Top Rating Restaurant
      </button>
    </div>
      
      <div className="cards">
        {restroData?.map((restaurant) => (
          <CardComponent key={restaurant?.info?.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyLayout;
