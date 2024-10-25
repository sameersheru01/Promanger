import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addtokentoheader } from '../helper/Helper';
import TaskBar from './TaskBar';

function Board() {
  const [username, setUserName] = useState(null); // Default to null initially
  const [todoData, setTodoData] = useState([]);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const headers = addtokentoheader({ headers: {} });
        const response = await axios.get('http://localhost:5000/api/alldata', { headers });
        
        setUserName(response.data.user.name);
        setTodoData(response.data.usertodos);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {username ? (<>
        <h3>Welcome! {username}</h3>
          <TaskBar />
          <TaskBar />
      </>
      ) : (
        <h3>Loading...</h3> // Placeholder while waiting for the username
      )}
    </div>
  );
}

export default Board;
