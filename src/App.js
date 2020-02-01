import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Home from './components/Home';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const getHash = () => {
  return window.location.hash.slice(1);
};

const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem('userId');
  if (userId) {
    try {
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

  let [clicker, setClicker] = useState(0);
  const [params, setParams] = useState(qs.parse(getHash()));

  const changeUser = () => {
    clicker++;
    localStorage.clear();
    setClicker(clicker);
    fetchUser();
  };

  useEffect(() => {
    fetchUser().then(user => {
      const userCopy = { ...user };
      setUser(userCopy);
    });
  }, [clicker]);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={user.avatar} alt="user-avatar"></img>
        Welcome {user.email}
        <button onClick={changeUser}>Change User</button>
      </div>
      <Home user={user} API={API} />
    </div>
  );
}

export default App;
