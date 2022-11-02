import React from "react";
import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
    const [inputTask, setinputTask] = useState("");
    const [task, settask] = useState([]);

    const handleChange = (event) => {
        setinputTask(event.target.value);
    };

    const addTask = () => {
        const newTask = {
            id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
            nameValue: inputTask,
            complated:false
        };
        settask([...task, newTask]);
    };

    const handleDelet = (id) => {
        settask(task.filter((task) => task.id !== id));
    };

    const handleComplate=(id)=>{
        
         settask(task.map((task)=>{
            if(task.id===id){
               return{...task,complated:true}
            }
            else{
                return task
            }
         }))
    }

    return (
        <div className="todo">
            <div className="todo-head">Welcome  Bro!</div>
            <div className="todo-body">
                <input type={"text"} onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
                <div>
                    {task.map((value, key) => {
                        return (
                            <div style={{backgroundColor:value.complated ?"green":""}}>
                                <h3 key={key}>{value.nameValue}</h3>
                                <button onClick={() => handleDelet(value.id)}>
                                    delete
                                </button>
                                <button onClick={()=>handleComplate(value.id)}>{value.complated ?"complated":"finish"}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
