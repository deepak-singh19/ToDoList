import React from 'react'

const DoubleChnage = (val, index ) => {
    console.log(val.todo);
  return (
    <div>
        <div className="p-2 grow text-lg flex justify-items-start font-semibold flex-wrap border-1 " >{val.todo}</div>
    </div>
  )
}

export default DoubleChnage;