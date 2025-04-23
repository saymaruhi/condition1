import { useState } from "react";

function User() {
  const [display, setdisplay] = useState(true);
  const [count, setcount] = useState(0);
 
  return (
    <div>
      <h2>practicing component using State</h2>
      {display ? <h2>Ruhi</h2> : null}
      <button onClick={() => setdisplay(!display)}>Click Me!</button>
      <h2>Multiple Condition in React js</h2>
      <h2>{count}</h2>
      {
        count==0?<h2>condition0</h2>
        :count==1?<h2>condition1</h2>
        :count==2?<h2>condition2</h2>
        :count==12?<h2>condition12</h2>
        :<h2>condition not meet</h2>
      }
     

      <button onClick= {() => setcount(count+1)}>Count Click</button>



    </div>
  );
}
export default User;