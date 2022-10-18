import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import UserInfo from './Component/UserInfo/UserInfo';
import data from './Data/data.json';
import {Routes, Route} from 'react-router-dom'
import Selected from './Component/Selected/Selected';

function App() {
  const [user, setUser] = useState([])
  const [selected, setSelected] = useState([])
  const addUserHandler = (user) =>{
    const newUser = [...selected, user];
    setSelected(newUser);
  }
  useEffect(()=>{
    setUser(data);
  },[])
  
  // console.log(user)
  return (
    <div className="body">
      <Header count = {selected}></Header>
      <Routes>
        <Route path='/' element={
          <div className='users'>
            {
              user.map(data => <UserInfo key={data.id} addUserHandler={addUserHandler} userInfo = {data}></UserInfo>)
            }
          </div>
        }/>
        <Route path='/selected' element={
          <Selected userData = {selected}></Selected>
        } />
      </Routes>
    </div>
  );
}

export default App;
