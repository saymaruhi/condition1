import { useState } from "react";

function User(){

    const [display,setdisplay]= useState(true)

   return(
    <div>
        <h2>practicing component using State</h2>
        {
            display?<h2>Ruhi</h2>:null
        }
        <button onClick = {() => setdisplay (!display)}>Click Me!</button>
    </div>
   )
}
export default User;