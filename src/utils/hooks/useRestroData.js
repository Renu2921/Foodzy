import { useEffect, useState } from "react";

const useRestroData=()=>{
    const [restroData, setRestroData]=useState([]);
      const [filteredRestroData, setFilteredRestroData] = useState([]);
    useEffect(()=>{
ApiData();
    },[]);

     const ApiData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6085642&lng=77.3561307&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
     setRestroData(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestroData(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
    return {restroData,setRestroData,filteredRestroData,setFilteredRestroData};
};

export default useRestroData;