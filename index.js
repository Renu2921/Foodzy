import React from "react";
import ReactDOM from "react-dom/client";

const restaurants = [
  {
    id: 1,
    name: "Bubu ki Rasoi",
    cuisine: ["South Indian",  "Desserts"],
    rating: 3.5,
    address: "Sirsa, Haryana",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/15/418108f8-ee01-4111-bb3b-25cc472899a1_01503c40-374d-4694-93d3-ef9165c5174d.jpg"
  },
  {
    id: 2,
    name: "Spice Villa",
    cuisine: ["North Indian", "Chinese"],
    rating: 4.2,
    address: "Chandigarh, Punjab",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 3,
    name: "Tandoori Tales",
    cuisine: ["Indian", "Tandoori", "Grill"],
    rating: 4.0,
    address: "Gurgaon, Haryana",
    image: "https://images.unsplash.com/photo-1604908177527-979c912b0a77?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 4,
    name: "Curry House",
    cuisine: ["Indian", "Vegetarian"],
    rating: 4.5,
    address: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1601050693600-1db6d9bc9f7c?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 5,
    name: "Pizza & Co",
    cuisine: ["Italian", "Fast Food"],
    rating: 4.3,
    address: "Delhi, Delhi",
    image: "https://images.unsplash.com/photo-1601924579410-6ac8c8a0f4c6?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 6,
    name: "Burger Point",
    cuisine: ["Fast Food", "Burgers"],
    rating: 3.9,
    address: "Noida, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 7,
    name: "Dosa Delight",
    cuisine: ["South Indian", "Breakfast"],
    rating: 4.6,
    address: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1604908177527-979c912b0a77?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 8,
    name: "Sushi World",
    cuisine: ["Japanese", "Seafood"],
    rating: 4.4,
    address: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 9,
    name: "Cafe Mocha",
    cuisine: ["Bakery", "Beverages"],
    rating: 4.0,
    address: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1601050693600-1db6d9bc9f7c?auto=format&fit=crop&w=660&q=80"
  },
  {
    id: 10,
    name: "The Salad Bowl",
    cuisine: ["Salads", "Healthy Food"],
    rating: 4.7,
    address: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=660&q=80"
  }
];
const Header=()=>{
    return (
        <div className="navbar">
            <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png" className="logo"/>
            <div className="navbar-links">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Login/Sign-up</li>
                </ul>
            </div>
        </div>
        
    )
}
const BodyLayout=()=>{
    return (
<div>
    <div className="search">Search</div>
    <div className="cards">
        {restaurants?.map(restaurant=>
       <CardComponent key={restaurant?.id} 
       restData={restaurant}/>
        )
}
    </div>
</div>
    )
}
const CardComponent=({restData})=>{
    const {name,cuisine,rating,address,image}=restData
    return (
        <div className="card-container">
            <div className="card">
       <img className="card-image" src={image}/>
       <h3>{name}</h3>
       <p>{cuisine?.join(", ")}</p>
       <p>{rating}</p>
       <p>{address}</p>
        </div>
        </div> 
    )
}


const AppLayout=()=>{
    return (
        <div className="container">
            <Header/>
            <BodyLayout/>

        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
