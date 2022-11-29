import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Leads from './pages/Leads'
import Sidebar from './components/Sidebar/Sidebar';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Accounts from './pages/Accounts';
import Home from './pages/Home'

function App() {
  axios.defaults.baseURL = 'https://shortly-crm.onrender.com/api/v1'
	axios.defaults.headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	}

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [setLoggedIn])

  return (
    <>
      <BrowserRouter>
        {!loggedIn ? (
          <Login setLoggedIn={setLoggedIn}/>
        ) : (
        <div className='flex justify-start gap-30'>
        <Sidebar setLoggedIn={setLoggedIn}/>
        <div className='w-full mt-14'>
        <Routes>
          <Route index path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/leads' element={<Leads/>} />
          <Route path='/deals' element={<Deals/>} />
          <Route path='/contacts' element={<Contact/>} />
          <Route path='/accounts' element={<Accounts/>} />
        </Routes>
        </div>
        </div>
        )}
        
      </BrowserRouter>
    </>
  );
}

export default App;
