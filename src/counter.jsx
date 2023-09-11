import React from "react";
function Counter(){
    var [Count,setCount]= React.useState(0)
     
    return(
        <div className="mybox">
            <h1>Counter:{Count}</h1>
            
        </div>
    )
}
export default Counter;