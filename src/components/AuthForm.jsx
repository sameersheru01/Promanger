import React, { useState } from 'react';
import styles from '../components/AuthForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true); 
    const [formdata, setFormdata] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    }); 
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // console.log(formdata)


    const cleardata = ()=>{setFormdata({
        name:"",
        email:"",
        password:"",
        confirmpassword:""})}
    const handlechange = (e)=>{
        // const { name, value } = e.target;
        setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
        setErrors({
            ...errors,
            [e.target.name]:'',
        })
    }
    const submmited = async(e)=>{
        e.preventDefault();
        if(isLogin){
            const {email, password} = formdata;
            const loginData = {email, password};
            // cleardata();
            // console.log(loginData)
            try {
                const response = await axios.post('http://localhost:5000/api/v1/login', loginData);
                // Handle successful registration
                console.log(response);
                if(response.status==200){ 
                    const token = localStorage.setItem('token', response.data.token);
                    navigate("/Dashboard")};
            } catch (error) {
                if (error.response && error.response.data.error) {
                    setErrors(error.response.data.error);
                    // console.log(errors);
                } else {
                    setErrors({ server: 'An unexpected error occurred.' });
                }
                console.log(errors)
            }
        }else{
            // console.log(formdata);
            // cleardata();
            try {
                const response = await axios.post('http://localhost:5000/api/v1/register', formdata);
                // Handle successful registration
                console.log(response.data.message);
                setErrors({})
            } catch (error) {
                if (error.response && error.response.data.error) {
                    setErrors(error.response.data.error);
                    // console.log(errors);
                } else {
                    setErrors({ server: 'An unexpected error occurred.' });
                }
                // console.log(errors)
            }
        }
    }
  return (
    <div className={styles.container}>
        <form onSubmit={submmited}>
        <h3>{isLogin ? "Login" : "Register"}</h3>
            {!isLogin && <div className={styles.inputbox}>
                <FaRegUser className={styles.inputicon}/>
                <input className={errors.name && styles.inputerror} type="text" name="name" placeholder='Name' value={formdata.name} onChange={handlechange}  />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div> }
            <div className={styles.inputbox}>
                <MdOutlineMail className={styles.inputicon}/>
            <input className={errors.email && styles.inputerror} type="email" name='email' placeholder='Email' value={formdata.email} onChange={handlechange} />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.inputbox}>
                <CiLock className={styles.inputicon}/>
            <input className={errors.password && styles.inputerror} type="text" name='password' placeholder='Password' value={formdata.password} onChange={handlechange} />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
            </div>
            {!isLogin && <div className={styles.inputbox}>
            <CiLock className={styles.inputicon}/>
                <input className={errors.confirmpassword && styles.inputerror} type="text" name="confirmpassword" placeholder='Confim Password' value={formdata.confirmpassword} onChange={handlechange} />
                {errors.confirmpassword && <span className={styles.error}>{errors.confirmpassword}</span>}
        {errors.server && <span className={styles.error}>{errors.server}</span>}
            </div> }
        <button type='submit' >{isLogin ? "Login" : "Register"}</button>
        <p>{isLogin ? "Have no account yet?" : "Have an account ?"}</p>
        <button className={styles.btn} type='button' onClick={()=>{setIsLogin(!isLogin,cleardata(),
            setErrors({}))}}>{isLogin ? "Register" : "Login"}</button>
        </form>
    </div>
  )
}

export default AuthForm
