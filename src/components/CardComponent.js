import { IMAGR_URL } from "../utils/constants";
import { useNavigate } from "react-router";
const CardComponent=({restData})=>{
    const navigate=useNavigate();
    const {id,name,cuisines,avgRating,cloudinaryImageId}=restData?.info
    return (
        <div className="card-container" onClick={()=>{
           navigate(`/restaurant/${id}`)
        }}>
            <div className="card">
       <img className="card-image" src={`${IMAGR_URL}${cloudinaryImageId}`}/>
       <h3>{name}</h3>
       <p>{cuisines?.join(", ")}</p>
       <p>{avgRating}</p>
        </div>
        </div> 
    )
};

export default CardComponent;