import axios from "axios"
import { useEffect, useState } from "react"


export default function AdminProductsPage(){

    const [products,setProducts]=useState([
        
    {
        "_id": "6884cdc7c570f9f9b0967dff",
        "productId": "BP1001",
        "productName": "Radiance Glow Face Serum",
        "altNames": [
            "Glow Serum",
            "Face Radiance Serum"
        ],
        "images": [
            "https://example.com/images/serum-front.jpg",
            "https://example.com/images/serum-back.jpg"
        ],
        "price": 29.99,
        "lastprice": 39.99,
        "stock": 150,
        "description": "A lightweight face serum enriched with vitamins and antioxidants to brighten your skin and restore natural radiance.",
        "__v": 0
    },
    {
        "_id": "68852c7d5ce83dd525e5c396",
        "productId": "BP1002",
        "productName": "Radiance Glow body Serum",
        "altNames": [
            "Glow Serum",
            "Face Radiance Serum"
        ],
        "images": [
            "https://example.com/images/serum-front.jpg",
            "https://example.com/images/serum-back.jpg"
        ],
        "price": 200.99,
        "lastprice": 250.99,
        "stock": 150,
        "description": "A lightweight face serum enriched with vitamins and antioxidants to brighten your skin and restore natural radiance.",
        "__v": 0
    }
]
    )

    useEffect(()=>{
    axios.get("http://localhost:5000/api/products").then((res)=>{
        console.log(res.data)
        //setProducts(res.data)
    })
},[]
    )
//console.log(products)

   return(
    <div>
        <h1>Admin Product Page</h1>
        {
            products.map(
                (product,index)=>{
                    return(
                        <div key={product._id}>
                            {index}
                            {product.productName}
                        </div>
                    )

                }
            )
        }
    </div>
   )
}

// async function getProducts() {
//     const res =await axios.get("http://localhost:5000/api/products")
//     console.log(res)

// }