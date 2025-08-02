export default function ProductCard(props){
    return(
        <div style={{ textAlign: "center" }}>
      <img 
        src={props.src} 
        alt={props.name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }} 
      />
            <button>Add to cart</button>
            <h1>{props.name}</h1>
            <h2>Price : {props.price}</h2>
            
        </div>
    )
}