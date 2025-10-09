import CardComponent,{withOpenLabel} from "./CardComponent";
import { useState, useEffect, useContext } from "react";
import ShimmerCard from "./ShimmerCard";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestroData from "../utils/hooks/useRestroData";
import UserContext from "../utils/context/UserContext";

const BodyLayout = () => {
  const [searchValue, setSearchValue]=useState("");
  const onlineStatus=useOnlineStatus();
// console.log("body rendered")  //whenever state variable change,react trigger a reconsiliation cycle(re-renders the component)
  const {restroData,setRestroData,filteredRestroData}=useRestroData();

const CardWithOpenLabel=withOpenLabel(CardComponent);
const {loggedInUser,setUserName}=useContext(UserContext);

  if(!onlineStatus) return <h1>You are Offline,Please check internet connection!!</h1>
   if (restroData.length === 0 && filteredRestroData.length === 0)
    return <ShimmerCard />;

  if (restroData.length === 0 && filteredRestroData.length > 0)
    return <h2>No restaurants found for "{searchValue}"</h2>;

  return  (
    <div className="">
    <div className="py-6">
        <input 
        className="border border-slate-400 ml-4 mr-2 px-2 rounded-md" 
        type="text" 
        value={searchValue} 
        placeholder="Search" 
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}>
        </input>
        <button
        className="border border-slate-400 bg-green-100 px-4 rounded-md"
        onClick={()=>{
           const filterData=filteredRestroData?.filter(restro=>
                restro?.info?.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            setRestroData(filterData); 
        }}>Search</button>  
        <button
        className="border border-slate-400 mx-4 px-4 rounded-md bg-yellow-50"
        onClick={() => {
          const filteredData = filteredRestroData?.filter(
            (restro) => restro?.info?.avgRating > 4.5
          );
          setRestroData(filteredData);
        }}
      >
        Top Rating Restaurant
      </button>
      <div>
        <input type="text" className="border border-gray-400 mx-5 p-1 my-2 rounded-lg" value={loggedInUser} onChange={(e)=>{
          setUserName(e.target.value);
        }}/>
      </div>
    </div>
      
      <div className="grid grid-cols-12 gap-6 px-6 my-10">
        {restroData?.map((restaurant) => (
          
            restaurant?.info?.isOpen ?<CardWithOpenLabel key={restaurant?.info?.id} restData={restaurant} /> :
            <CardComponent key={restaurant?.info?.id} restData={restaurant} />

        
        ))}
      </div>
    </div>
  );
};

export default BodyLayout;
