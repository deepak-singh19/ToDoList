import React from 'react';
import { useState } from 'react';

const CreateTask = ({addTask}) => {

    const [value, setValue] = useState("");
    const submit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }



  return (
    <div>
        <input type="text" value={value} placeholder="ADD new task" onChange={e => setValue(e.target.value)}/>
        <button onClick={submit}>ADD</button>
    </div>
  )
}

export default CreateTask