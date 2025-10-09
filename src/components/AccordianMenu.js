import React,{useState} from 'react';
import { IMAGR_URL } from "../utils/constants"; 
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch } from 'react-redux';
import { additems } from '../utils/store/cartSlice';

export default function AccordianMenu({accordianCategory}) {
      const [open, setOpen] = useState(0);
      const dispatch=useDispatch();

      const handleClick=(product)=>{
        dispatch(additems(product));      }
  return (
    <div>
      {  accordianCategory?.map((item,index)=>
            <div key={item?.card?.card?.title} className="">
                 <div className="flex justify-between" 
                  onClick={() => {
          console.log("button clicked");
          setOpen(open === index ? null : index);
        }} >  
        <h1 className=" font-semibold text-xl m-2">{item?.card?.card?.title} </h1>
        {open===index ?<ChevronUp/>:<ChevronDown />}
      </div>
     
        {open===index && (
        <div> 
           {item?.card?.card?.itemCards.map(product=>
            <div key={product?.card?.info?.id} className="border border-gray-300 rounded-lg my-7 p-5 flex gap-5 ">
                <div>
                <p className="font-semibold text-lg">{product?.card?.info?.name} </p>
                <div className="flex gap-2">
                <p className="text-gray-400 line-through">₹{product?.card?.info?.price/100}</p>
                <p>₹{product?.card?.info?.finalPrice/100} </p>
                </div>
                  <p>{product?.card?.info?.description} </p>
                  <p>{product?.card?.info?.ratings?.aggregatedRating?.rating} </p>
                </div>
                <div>
                    <div className="absolute">
                    <button className="border text-white bg-black"
                    onClick={()=>handleClick(product)}>Add+</button>
                    </div> 
                 <img src={`${IMAGR_URL}${product?.card?.info?.imageId}`} className="w-80 h-40 rounded-xl"/> 
                </div>
                </div>
           )}
             </div> 
        )}
    
        </div> 
    )}
    </div>
  )
}
