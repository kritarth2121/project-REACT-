import React,{useState} from "react";
export default function ReactHooks(){
    const [name,setName]=useState("------");
    const [ roll,setRoll]=useState(0);

    return(
        <div>
        <h1>This is React Hook
        </h1>
        <h2> Student Roll no: {roll}</h2>
        <h2> Student name : {name}</h2>
        <button onClick={()=>{ setName("Panakak Sharma"); setRoll(10);}}>Click me</button>

        </div>

    )
}
