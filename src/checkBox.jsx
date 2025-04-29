 import {useState} from "react"

 function Skills(){

    const[skills,setskills]= useState([])// this is state

    const handelskills=(event)=>{
       
event.target.value
    }
    return(

        <div>
            <h3>Handle Checkbox in React js</h3>
            < input onChange = {handelskills}type="checkbox" id="Java" value= "Java" />
            <label htmlFor="Java">Java</label>
            <br/>
            
            <input type="checkbox" id="React"/>
            <label For="React">React</label>
            <br/>
            <input type="checkbox" id="Node"/>
            <label For= "Node">Node</label>
            <h3>{skills.toString()}</h3>
            
        </div>
    ) 
 }
 export default Skills 