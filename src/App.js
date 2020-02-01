import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import Notes from "./components/Notes"
import qs from "qs"
const API = "https://acme-users-api-rev.herokuapp.com/api"

const fetchUser = async () => {
  const storage = window.localStorage
  const userId = storage.getItem("userId")
  console.log("fetch user function running")
  if (userId) {
    console.log("if statement here")
    try {
      console.log(userId)
      return (await axios.get(`${API}/users/detail/${userId}`)).data
    } catch (ex) {
      storage.removeItem("userId")
      return fetchUser()
    }
  }

  const user = (await axios.get(`${API}/users/random`)).data

  storage.setItem("userId", user.id)
  return user
}

function App() {
  const [user, setUser] = useState({})

  let [clicker, setClicker] = useState(0)

  const changeUser = () => {
    clicker++
    localStorage.clear()
    setClicker(clicker)
    fetchUser()
  }

  useEffect(() => {
    fetchUser().then(user => {
      const userCopy = { ...user }
      // console.log(user)
      setUser(userCopy)
    })
  }, [clicker])

  const getHash = () => {
    return window.location.hash.slice(1)
  }
  const [params, setParams] = useState(qs.parse(getHash()))

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setParams(qs.parse(getHash()))
    })
    setParams(qs.parse(getHash()))
  }, [])

  return (
    <div className="App">
      <div className="header">
        <img src={user.avatar}></img>
        Welcome {user.email}
        <button onClick={changeUser}>Change User</button>
      </div>
      {/* {params === undefined &&  */}
      <Notes userId={user.id} API={API} user={user} />
    </div>
  )
}

export default App
