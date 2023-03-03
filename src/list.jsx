import React from 'react'

const List = ({val, index, doneTask}) => {
    console.log(val);
    return (
        <div>
            <li>{val.text}</li>
            {/* <input type='checkbox'/> */}
            </div>
    );
    



  
}

export default List;