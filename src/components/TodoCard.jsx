import React, { useState } from 'react';
import styles from '../components/TodoCard.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { cardDate } from '../helper/Helper';

function TodoCard() {
    const pro= 'low';
    const date= "01/12/2000";
    const [buttons,setButton]=useState(["BACKLOG","PROGRESS","DONE"])
    const priorityColors = {
        high: 'red',
        medium: 'blue',
        low: 'green',
      };
    const arr =["nam","gfs","asdfghjksdfghjkjhgfdfghjkjhgfdfghjkjhgfdfghjkjhgfghjk"];
    const handleCheckboxChange = ()=>{
    };
  return (
    <div className={styles.card}>
        <div className={styles.head}>
            <span><GoDotFill size={15} style={{ color: priorityColors[pro] }}/><p>high priority</p></span>
            <BsThreeDots size={20}/>
        </div>
        <p className={styles.title}>hero tittlekjdhwqdhy ugdwuygduyg dyugasyudgas yudgbgdashc bffvdas jbch</p>
        <span className={styles.spantitle}>hero tittlekjdhwqdhy ugdwuygduyg dyugasyudgas yudgbgdashc bffvdas jbch</span>
        <div className={styles.checkbar}>
            <p>Checklist (0/3)</p><div className={styles.dropdownicon}><IoIosArrowDown size={18} /></div>
        </div>
            <div className={styles.todos}>
                {arr.map((data,index)=>(
                    <div className={styles.inputcontainer} key={index}>
                        <p className={styles.inputWithCheckbox}  >{data}</p>
                        <input className={styles.checkboxInside} type="checkbox" onChange={() => handleCheckboxChange()}/>
                    </div>
                ))}
            </div>
        <div className={styles.footer}>
            <button className={styles.date}>{cardDate(date)}</button>
            <div className={styles.buttons}>
                {buttons.map((btn,index)=>(
                    <button key={index}>{btn}</button>
                ))}
            </div>
        </div>
        </div>
  )
}

export default TodoCard