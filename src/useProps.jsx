import { useState } from "react";
function Test({ user }) {
  return (
    <div>
      <hr />
      <h2>Props Component</h2>
      <h3>Name: {user.name}</h3>
      <h3>Age:{user.age}</h3>
      <h3>address:{user.address}</h3>
      <h3>gender:{user.gender}</h3>
    </div>
  );
}

export default Test;
function Inputfield() {
  const [val, setval] = useState("");
  return (
    <div>
      <hr />
      <h2 style={{ color: "red" }}>Input Type Value</h2>
      <input
        type="text"
        value={val}
        onChange={(event) => setval(event.target.value)}
        placeholder="Enter Value" ></input>

      <h3>{val}</h3>
      <button
        style={{ color: "green", background: "pink", width: 200 }}
        onClick={() => setval("")}> Clear Value</button>
    </div>
  );
}
export { Inputfield };

function Fields(){

  const[name,setname]= useState("");
  const[password,setpassword]= useState("");
  const[email,setemail]= useState("");
    return(
        <div>
          <hr/>
          <h3>3 Input Fileds Value</h3>
          <input type= "text" value={name} onChange= {(event)=> setname(event.target.value)} placeholder= "Enter Name"></input><br/><br/>
          <input type= "password" value={password} onChange= {(event)=> setpassword(event.target.value)}placeholder= "Enter Password"></input><br/><br/>
          <input type= "email" value={email} onChange= {(event)=> setemail(event.target.value)}placeholder= "Enter Email"></input><br/><br/><br/>

          <h3>{name}</h3>
          <h3>{password}</h3>
          <h3>{email}</h3>
          <button style={{color: "red", background:"yellow"}} onClick={()=> {setname(""), setpassword(""), setemail("")}}>Clear Value</button>
            
        </div>
    )
}
export {Fields}
function Try(){
  const[name,setname]= useState(true)
  return(
    <div>
      <h2>Try for Condition on onClick event</h2>
      <br/>
      <h3>{name}</h3>
      {name? <h4>Sayma Ruhi</h4> :null}
     
      <button onClick={()=> setname(!name)}>Click Me!</button>
     
      
      
    </div>
  )
}
export{Try}