import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem('userId');
  console.log('fetch user function running');
  if (userId) {
    console.log('if statement here');
    try {
      console.log(userId);
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    } catch (ex) {
      storage.removeItem('userId');
      return fetchUser();
    }
  }

  const user = (await axios.get(`${API}/users/random`)).data;

  storage.setItem('userId', user.id);
  return user;
};

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser().then(user => {
      const userCopy = { ...user };
      console.log(user);
      setUser(userCopy);
    });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={user.avatar}></img>
        Welcome {user.email}
        <button>Change User</button>
      </div>
    </div>
  );
}

export default App;
