import React, { useState } from 'react';
import styles from '../components/AddTodo.module.css';
import { GoDotFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { GetInitials } from '../helper/Helper';

function AddTodo() {
    const [todoinput,setTodoinput]=useState([])
    const [members,setMembers]=useState([])
    const [isopen,setIsopen]=useState(false)
    const [assigned,setAssigned]=useState(null)
    const names = ['Johnsxa@gmail.com', 'Jane', 'Alice', 'Bob'];

    const handleSelect = (option)=>{
        setAssigned(option)
        setIsopen(false)
    }
    const handleSave = ()=>{
        // setTodoinput([...todoinput, { todo: '', checked: false }]);
        console.log(todoinput);
    }
    const handleAdd = ()=>{
        setTodoinput([...todoinput, { todo: '', checked: false }]);
    }
    const handleDelete = (index)=>{
        const deletedInput = todoinput.filter((_, i) => i !== index);
        // allInputs = allInputs[index].pop
        setTodoinput(deletedInput);
    }
    const handleInputChange= (index,value)=>{
        const newInputs = [...todoinput];
    newInputs[index].value = value; // Update the specific input value
    setTodoinput(newInputs);
    }

    const handleCheckboxChange = (index) => {
        const newInputs = [...todoinput];
        newInputs[index].checked = !newInputs[index].checked; 
        setTodoinput(newInputs); 
      };
  return (
    <div className={styles.overlay}>
        <div className={styles.popup} >
            <div>
            <label>Title *</label>
            <input type="text" placeholder='Enter Task Title'/>
            </div>
            <div className={styles.priority}>
                <label >Select Priority *</label>
                <button><GoDotFill style={{ color: '#FF2473' }}/> HIGH PRIORITY</button>
                <button><GoDotFill style={{ color: '#18B0FF' }}/> MODERATE PRIORITY</button>
                <button><GoDotFill style={{ color: '#63C05B' }}/> LOW PRIORITY</button>
            </div>
            <div className={styles.assign}>
                <p>Assign to</p>
                <div className={`${styles.assignbar} ${assigned && styles.active}`} onClick={() => setIsopen(!isopen)}>
                    {assigned || "Add a assignee"}
                </div>
                {isopen && 
                <div className={styles.dropdown}>
                {names.map((option, index) => (
                    <div
                    key={index}
                    className={styles.option}
                    >
                    <div className={styles.mail}><span>{GetInitials(option)}</span>{option}</div> <button onClick={() => handleSelect(option)}>Assign</button>
                    </div>
                ))}
                </div>}
            </div>
                <label>Checklist (1/3) *</label>
            <div className={styles.todos}>
                {todoinput.map((input,index)=>(
                    <div className={styles.inputcontainer} key={index}>
                    <input type="text" placeholder='Add a task' value={input.todo} onChange={(e) => handleInputChange(index, e.target.value)} className={styles.inputWithCheckbox}/>
                    <input type="checkbox" checked={input.checked} onChange={() => handleCheckboxChange(index)} className={styles.checkboxInside}/>
                    <MdDelete size={20} className={styles.icon} onClick={()=>handleDelete(index)}/>
                </div>
                ))}
            </div>
                <button onClick={handleAdd} className={styles.addbutton}>+ Add New</button>
            <div className={styles.bottom}>
                <input type="date"  />
                <div className={styles.buttons}>
                    <button className={styles.cancel}>cancel</button>
                    <button onClick={handleSave} className={styles.save}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo