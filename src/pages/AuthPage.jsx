import React, { useEffect, useState } from 'react';
import styles from '../pages/AuthPage.module.css';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
// import image from '../Asserts/auth-banner.png';

function AuthPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);
    
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        
      </div>
      <div className={styles.form}>
        {/* Your form elements go here */}
        <AuthForm />
        {/* <h1>form</h1> */}
        
      </div>
    </div>
  );
}

export default AuthPage;
