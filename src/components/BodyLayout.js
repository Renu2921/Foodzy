import CardComponent from "./CardComponent";
import { restaurants } from "../utils/dummyData";
import { useState } from "react";

const BodyLayout=()=>{
    const [restroData, setRestroData]=useState(restaurants);
    return (
<div>
    <button className="top-restro" onClick={()=>{
        const filteredData=restaurants?.filter(restro=>restro?.rating>4);
        setRestroData(filteredData);
    }}>Top Rating Restaurant</button>
    <div className="cards">
        {restroData?.map(restaurant=>
       <CardComponent key={restaurant?.id} 
       restData={restaurant}/>
        )
}
    </div>
</div>
    )
};

export default BodyLayout;