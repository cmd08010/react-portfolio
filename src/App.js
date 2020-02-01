import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notes from './components/Notes';
import Vacations from './components/Vacations';
import FollowingCompanies from './components/FollowingCompanies';
const API = 'https://acme-users-api-rev.herokuapp.com/api';

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

  return (
    <div className="App">
      <div className="header">
        <img src={user.avatar} alt="user-avatar"></img>
        Welcome {user.email}
        <button onClick={changeUser}>Change User</button>
      </div>
      <div className="components">
        <Notes userId={user.id} API={API} />
        <Vacations userId={user.id} API={API} />
        <FollowingCompanies userId={user.id} API={API} />
      </div>
    </div>
  );
}

export default App;
