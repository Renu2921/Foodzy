import { IMAGR_URL } from "../utils/constants";
import { useNavigate } from "react-router";
const CardComponent=({restData})=>{
    const navigate=useNavigate();
    const {id,name,cuisines,avgRating,cloudinaryImageId}=restData?.info
    return (
        <div className=" bg-slate-100 hover:bg-slate-200  border border-gray-300 rounded-lg col-span-2 h-[24rem] p-2" 
        onClick={()=>{
           navigate(`/restaurant/${id}`)
        }}>
            <div className="card">
       <img className="w-full h-44 border border-gray-50 rounded-l" src={`${IMAGR_URL}${cloudinaryImageId}`}/>
       <h3 className="font-bold text-lg my-3">{name}</h3>
       <p>{cuisines?.join(", ")}</p>
       <p>{avgRating}</p>
        </div>
        </div> 
    )
};

export const withOpenLabel=(CardComponent)=>{
   return (props)=>{
    return (
        <div className="col-span-2 ">
        <label className="absolute bg-black text-white px-2 py-1 rounded-lg">Open</label>
        <CardComponent {...props} />
        </div> 
    )
   }
}

export default CardComponent;