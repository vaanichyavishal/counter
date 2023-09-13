import React, { useState } from "react";
import { connect } from "react-redux";
function Todolist(props){
        var [nt,setNt]=useState('')
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNt(e.target.value)}} />&nbsp;
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:nt})}}>Add Todo</button>
            {props.t.todos.map((todo)=>{
                return <li>{todo}</li>
            })}
        </div>
    )
}

export default connect(function(store){return store})(Todolist)