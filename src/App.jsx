import { useState } from "react";

import Test from "./useProps.jsx";

function App() {
  const [display, setdisplay] = useState(true);

  

  return (
    <div>
      <h2>Sprint1 page</h2>
      <h1>Condition file</h1>
      {display ? <h2>Sayma Ruhi</h2> : <h3>condition not match</h3>}
      <button onClick={() => setdisplay(!display)}>Click me!</button>

      
      <Test name= {"Sayma"} age= {"35"} />
     
    </div>
  );
}


export default App;
