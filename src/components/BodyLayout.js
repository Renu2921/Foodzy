import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestroData from "../utils/hooks/useRestroData";

const BodyLayout = () => {
  const [searchValue, setSearchValue]=useState("");
  const onlineStatus=useOnlineStatus();
// console.log("body rendered")  //whenever state variable change,react trigger a reconsiliation cycle(re-renders the component)
  const {restroData,setRestroData,filteredRestroData,setFilteredRestroData}=useRestroData();
  if(!onlineStatus) return <h1>You are Offline,Please check internet connection!!</h1>

   if (restroData.length === 0 && filteredRestroData.length === 0)
    return <ShimmerCard />;

  if (restroData.length === 0 && filteredRestroData.length > 0)
    return <h2>No restaurants found for "{searchValue}"</h2>;

  return  (
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
