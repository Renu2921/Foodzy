import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { IMAGR_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestroMenu=()=>{
    const {resId}=useParams();
    const [menuData, setMenuData]=useState([]);
    useEffect(()=>{
        fetchMenuData();
    },[]);
    const fetchMenuData=async ()=>{
        const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6085642&lng=77.3561307&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData=await response.json();
        setMenuData(jsonData);
    }
    if (!menuData?.data?.cards?.length) return <ShimmerCard />;
    
    const {name,avgRating,cuisines,locality}=menuData?.data?.cards?.[2]?.card?.card?.info ??{};
    const {itemCards}=menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
?.[2]?.card?.card ??  {}
    return (
        <div className="menu">
            <h1>{name}</h1>
             <p>{avgRating}</p>
            <p>{cuisines?.join(",")}</p>
            <p>{locality}</p>

            <h1>Menu</h1>
            <div>
                {itemCards?.map((item)=>(
                   <div key={item?.card?.info?.id} className="card-containers ">
                    <ul>
                    <li>{item?.card?.info?.name}</li>
                <li>{item?.card?.info?.category}</li>
                <li>{item?.card?.info?.description}</li>
                <li>{item?.card?.info?.price}</li>
                <li>
                  <img src= {`${IMAGR_URL}${item?.card?.info?.imageId}`} className="menu-image" /></li>
                  </ul>
               </div>
                ))}
            </div>
        </div>
    )
};

export default RestroMenu;