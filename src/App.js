import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App() {

  const[todo, setTodo]=useState('');  
  const [list, setList]= useState(()=>{
    const savedTodds= localStorage.getItem("list");
    if(savedTodds){
      return JSON.parse(savedTodds);
    }else{

      return [{
        todo:"Read Book",
        done:false
      }]
    }
  });

  // const[checked, setChecked]= useState(false);
  // const[color, setColor]= useState("red");


  const handle=(event)=>{

    setTodo(event.target.value);

  }
  const addTask=()=>{
    setList((oldtask)=>{
      return [...oldtask,{todo, done:false}]
    });
    setTodo('');
    console.log(list);

  }

  const clearAll=()=>{
    setList([]);
  }

  const completeTask=(index)=>{

    // (color=="red")? setColor("green"): setColor("red");
    // setColor("green");
    // if(!checked){
    //   setChecked(true);
    // }else{
    //   setChecked(false);
    // }
    // console.log(color);
    const newTask=[...list];
    console.log(newTask);
    // console.log(newTask.index);
    
      newTask[index].done=true;

      setList(newTask);
    
    
  }


  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);
 

   

  return (
    <div className="w-auto h-screen bg-orange-400 flex justify-center">
      <div className=" w-auto h-auto flex flex-col justify-center items-center content-center m-4 bg-amber-400">
      <div className="flex flex-col justify-items-center justify-around  p-4 ">
      <input className="border-1" type="text" value={todo} onChange={handle} />
      <button className="border-2  rounded-md m-2" onClick={addTask}>ADD</button>
    </div>

    <div className="mt-2">
      {
        list.map((val,index)=>{
          return <div className="flex flex-row p-2 justify-between items-center bg-emerald-100  rounded-md m-2" style={{ textDecoration: val.done ? "line-through" : "" }}>
            <div className="p-2 grow text-lg flex justify-items-start font-semibold flex-wrap border-1 " key={index}>{val.todo}</div>
            <div className="m-1 p-1 text-s flex justify-items-end border-1 rounded-md  bg-lime-400"><button onClick={()=>{completeTask(index)}}>Complete</button></div>
          </div>

        })

      }
    </div>

    <div className="">
    <button className="m-1 p-1 text-s flex justify-items-end border-1 rounded-md bg-red-600" onClick={clearAll}>Clear All</button>
    </div>
    </div>
    </div>
  );
}

export default App;
