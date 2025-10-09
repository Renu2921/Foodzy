import { useDispatch, useSelector } from "react-redux";
import { IMAGR_URL } from "../utils/constants"; 
import { clearCart } from "../utils/store/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartData=useSelector((store)=>store.cart.items);
    console.log("cartData",cartData);

    const handleClear=()=>{
        dispatch(clearCart());
    }

   
    return (
        
        <div className="w-[50%] ml-[30rem]">
            <div className="text-center">           
                 <h1 className="text-[2rem] mt-5">Cart</h1>
                 {cartData?.length>0 && 
                  <button className="bg-black text-white px-2 py-1 rounded-lg mt-3"
            onClick={handleClear}>Clear Cart</button>}
           {
            cartData?.length===0 &&
            <h1 className="mt-1 font-semibold text-[1rem]">Cart is empty, Add items to the cart !! </h1>
           }
            </div>

            {
                cartData.map((item)=>
                    <div key={item?.card?.info?.id}>
                        <div key={item?.card?.info?.id} className="border border-gray-300 rounded-lg my-7 p-5 flex gap-5 ">
        <div>
        <p className="font-semibold text-lg">{item?.card?.info?.name} </p>
        <div className="flex gap-2">
        <p className="text-gray-400 line-through">₹{item?.card?.info?.price/100}</p>
        <p>₹{item?.card?.info?.finalPrice/100} </p>
        </div>
            <p>{item?.card?.info?.description} </p>
            <p>{item?.card?.info?.ratings?.aggregatedRating?.rating} </p>
        </div>
        <div>
            <div className="absolute">
            <button className="border text-white bg-black"
            onClick={()=>handleClick(product)}>Add+</button>
            </div> 
            <img src={`${IMAGR_URL}${item?.card?.info?.imageId}`} className="w-80 h-40 rounded-xl"/> 
        </div>
        </div>
     </div>
                )
            } 
            </div>
    )
};

export default Cart;