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
};

export default CardComponent;