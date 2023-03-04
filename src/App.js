import React from "react";
import { useState, useEffect } from "react";
import './App.css';

import {MdOutlineDoneOutline} from 'react-icons/md';
import {FaRegTimesCircle} from 'react-icons/fa';

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

  // HANDLE DOUBLE CLICK

  const [edit, setEdit]=useState(false);
  const [editText, seEditText]= useState(null);

  const editItem=(index)=>{
    // let neweditItem= list.find((ele)=>{
    //   return ele.index===index;
    // })
    console.log(list[index].todo);
    setEdit(true);
    setTodo(list[index].todo);
    seEditText(index);

  } 





  const handle=(event)=>{

    setTodo(event.target.value);

  }
  const addTask=()=>{
    if(!todo){
      alert("Please fill the data");
    } else if(todo && edit){
      setList(
        list.map((ele,index)=>{
          if(index===editText){
            return {...ele, todo:todo}
          }
          return ele;
          
        })
      )

      setEdit(false);
      setTodo('');
      seEditText(null);


    }else{
      setList((oldtask)=>{
        return [...oldtask,{todo, done:false}]
      });
      setTodo('');
      console.log(list);
    }
    

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

  const inCompleteTask=(index)=>{

    const newTask=[...list];
    console.log(newTask);
    
    
      newTask[index].done=false;

      setList(newTask);
    
    
  }


  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);
 

   

  return (
    <div className="w-auto h-screen  bg-orange-400 flex justify-center">
      <div className=" w-auto h-auto flex flex-col justify-center items-center content-center m-4 bg-amber-400">
      <div className="flex flex-col justify-items-center justify-around  p-4 ">
      <input className="border-1 rounded-s  m-2 flex flex-wrap" placeholder="Enter your ToDos" type="text" value={todo} onChange={handle} />
      {edit? <button className="border-2  rounded-md m-2 font-medium" onClick={addTask}>Edit</button>: <button className="border-2  rounded-md m-2 font-medium" onClick={addTask}>ADD</button>}
    </div>

    <div className="mt-2">
      {
        list.map((val,index)=>{
          return <div className="flex flex-row p-2 justify-between items-center bg-emerald-100  rounded-md m-2" style={{ textDecoration: val.done ? "line-through" : "" }}>
             <div className="p-2 grow text-lg flex justify-items-start font-semibold flex-wrap border-1 " onDoubleClick={()=>{editItem(index)}} key={index}>{val.todo}</div>
            <div className="m-1 p-1 text-s flex justify-items-end border-1 rounded-md  ">
              <MdOutlineDoneOutline className="m-1 bg-lime-400" onClick={()=>{completeTask(index)}}/>
              <FaRegTimesCircle  className="m-1 bg-red-400" onClick={()=>{inCompleteTask(index)}}/>
              </div>
          </div>

        })

      }
    </div>

    <div className="">
    <button className="m-1 p-1 text-s flex justify-items-end  border-1 rounded-md font-medium bg-red-600" onClick={clearAll}>Clear All</button>
    </div>
    </div>
    </div>
  );
}

export default App;


// <div className="p-2 grow text-lg flex justify-items-start font-semibold flex-wrap border-1 " onDoubleClick={()=>{console.log(index)}} key={index}>{val.todo}</div>