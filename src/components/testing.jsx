import { useState } from "react"
import"./testing.css"

export default function Testing(){
    //

    const[count,setCount] = useState(0)
    const[name,setname] = useState("Students")
    
    function increment(){
        if(count<10){
            setCount (count+1)
        }
    }

    function decrement(){
        if(count>0){
            setCount (count-1)
        }    
    }

    function changeName(value){
        setname(value)
    }

    //setCount(0)

    return(
        <div className="background">
            <h1>{name}</h1>
           <button className="val" onClick={decrement}> -</button>
            <span>{count}</span>
            <button className="val" onClick={increment}> +</button>

            <div className="buttonPanel">
                <button onClick={()=>changeName("Students")}>Students</button>
                <button onClick={()=>{changeName("Teachers")}}>Teachers</button>
                <button onClick={()=>changeName("Admins")}>Admin</button>
            </div>
            
        </div>
    )
}