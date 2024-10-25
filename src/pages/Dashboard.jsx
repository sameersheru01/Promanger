import axios from 'axios';
import styles from '../pages/Dashboard.module.css';
import React, { useEffect, useState } from 'react'
import { addtokentoheader } from '../helper/Helper';
import Sidenav from '../components/Sidenav';
import { Outlet, useNavigate } from 'react-router-dom';
import AddTodo from '../components/AddTodo';
import TodoCard from '../components/TodoCard';
import Settings from '../components/Settings';
import Analytics from '../components/Analytics';
import CustomDateInput from '../helper/DatePicker';

function Dashboard() {
  const[username,setUserName]= useState();
  const [todoData,setTodoData] = useState([])
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const headers =  addtokentoheader({headers:{}});
  //       const response = await axios.get('http://localhost:5000/api/alldata',{headers});
  //       setUserName(response.data.user.name)
  //       setTodoData(response.data.usertodos)
  //       // console.log(response)
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   }
  //   fetchUserData()
  // }, []);

  const token = localStorage.getItem('token');
// useEffect(()=>{
//   // console.log(token)
//   if(!token){
//     navigate("/login");
//   }
// },[token])
  return (
    <div className={styles.container}>
      <div className={styles.left}><Sidenav/></div>
      <div className={styles.right}>
        {/* <Outlet/> */}
        {/* <AddTodo/> */}
        {/* <Analytics /> */}
        <Settings/>
        {/* <TodoCard /> */}
        {/* <CustomDateInput/> */}
        </div>
    </div>
  )
}

export default Dashboard