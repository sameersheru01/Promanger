import React from 'react';
import { IoAddOutline } from "react-icons/io5";
import { LuCopyMinus } from "react-icons/lu";

function TaskBar() {
  return (
    <div>
        <div>
            <p>todo</p>
            <span><IoAddOutline /></span>
            <span><LuCopyMinus style = {{transform: 'rotate(360deg)' }} /></span>
        </div>
    </div>
  )
}

export default TaskBar