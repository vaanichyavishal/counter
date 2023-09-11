import React from "react";

function Todolist(){

    var [Todos,setTodos]= React.useState(['learn react','learn js'])

    return(
        <div>
            <h1>Todolist</h1>
            <ul>
                {
                    Todos.map((Todo)=>{
                        return <li>{Todo}</li>
                    })
                }               
            </ul>
        </div>
    )

}
export default Todolist;