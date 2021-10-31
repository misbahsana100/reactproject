// import React,{useState} from "react";
// // import axios from 'axios'
// const First =() => {
//   const [isLit,setLit] =useState(true)
//   let [num,setNum] = useState(0)
//   return(
//       <>
//       The room is {isLit ? 'bright' : "dark"}
//       <button onClick={()=>setLit(!isLit)}>On/Off</button>
//       <h1>{num}</h1>
//       <button onClick={()=>setNum(++num)}>+</button>
//       <button onClick={()=>setNum(--num)}>-</button>


//       </>
//   )
// }
// export default First

// import {useState} from "react";

import React from "react";
const Todayclass =()=>{
    const  [cities,setCities] = useState(['lahore','karachi','islamabad'])
    return(
        <div>
      {
          cities.map((item,index)=>(
              <div key ={index}>{item}</div>
    ))
      }
    


</div>
    )}
    export default Todayclass;

// import React,{useState} from "react";
// function First() {
//   const[items,setItems] = useState([])
//   const addItem =()=>{
// setItems([...items,{
//   id:items.length,
//   value:Math.floor(Math.random()*10) + 1
// }])
//   }
//   return(
//     <div>
//       <button onClick={addItem}>Add a number</button>
//       <ul>
//         {items.map(item=>(
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default First

// import React, { useState } from 'react';

// function hook() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default hook
