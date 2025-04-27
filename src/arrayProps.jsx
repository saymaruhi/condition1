function College({name}){
    return(
        <div style= {{color: "red", border: "3px solid green", width: 400, backgroundColor: "pink"}}>
            <h2> Array Props</h2>
            <h3>College Names:{name}</h3>
        </div>
    )
}
export default College;

function DefaultProps({name="No Data"}){
    return(
        <div>
            <hr/>
            <h3 > Default Props</h3>
            <h3>Hi, {name}</h3>
           
            
        </div>
    )
}
export {DefaultProps}