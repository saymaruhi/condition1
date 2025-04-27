import { useState } from "react";

import Test from "./useProps";
import College from "./arrayProps.jsx";

function App() {
  const [display, setdisplay] = useState(true);

  let userObject = {
    name: "Anil",
    age: "34",
    address: "USA",
    gender: "M  F"
  }

  let userObject2 = {
    name: "Suhaan ",
    age: "10",
    address: "USA",
    
  }
 
  let collegeNames= ['NIT', 'MIT' , 'IIT']

  

  return (
    <div>
      <h2>Sprint1 page</h2>
      <h1>Condition file</h1>
      {display ? <h2>Sayma Ruhi</h2> : <h3>condition not match</h3>}
      <button onClick={() => setdisplay(!display)}>Click me!</button>

      <College name = {collegeNames[1]} />
     
      <Test user= {userObject} />
      <Test user= {userObject2} />
     
    </div>
  )
}


export default App; 
