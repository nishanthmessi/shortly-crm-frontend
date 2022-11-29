import { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios' 
import Register from './Register'
import Logo from '../img/stopwatch.png'

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");
	const [signUp, setSignUp] = useState(false)

  const navigate = useNavigate()

  // SignIn
  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [setLoggedIn])

  const handleLogin = async (e) => {
		e.preventDefault()

		const user = {
			password: password,
			email: email,
		}
		await axios
			.post('/login', user)
			.then((response) => {
				sessionStorage.setItem('token', response.data.token)
        setLoggedIn(true)
				navigate('/home')
			})
			.catch((err) => {
				setError(err.response.data.error)
        setTimeout(() => {
          setError('')
        }, 5000)
			})
	}

  return (
    <>
    {!signUp ? (  
      <div className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
      <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
        <div className="w-full relative">
          <div className="mt-6">
            <div className='flex justify-center mb-4'>
              <img className="w-8 h-8 mr-2" src={Logo} alt="logo"/> 
              <span className='text-3xl font-bold text-primary'>Shortly</span>
            </div>
            <div className="mb-5 pb-1 text-4xl text-center font-bold text-gray-700">
              Hello <span className="text-secondary">There!</span>
            </div>
            <div className="text-xl text-center font-semibold text-gray-700">
              Sign in to your account
            </div>
                    
            <form className="mt-8 max-w-sm mx-auto" onSubmit={handleLogin}>
              <div className='flex justify-center'>
                {error && <span className="bg-red-700 text-white p-2 rounded-md text-center">{error}</span>}
              </div>
            
              <div className="mx-auto max-w-lg">
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Email</span>
                  <input 
                    placeholder="your email" 
                    type="email"
                    className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md text-neutral focus:placeholder-gray-500 bg-white focus:border-primary focus:outline-none"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="py-2" x-data="{ show: true }">
                  <span className="px-1 text-sm text-gray-600">Password</span>
                  <div className="relative">
                    <input 
                      type='password' 
                      placeholder="your password" 
                      className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md text-neutral focus:placeholder-gray-500 bg-white focus:border-primary focus:outline-none"
                      required
									    value={password}
									    onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                </div>
                <div className="flex flex-col text-center">
                  {/* <label className="block text-gray-500 font-bold my-4">
                    <Link to='/forgotpassword' className="cursor-pointer tracking-tighter text-gray-500 hover:text-gray-700 border-b-2 border-gray-200 hover:border-orange-500">
                      Forgot Password?
                    </Link>
                  </label> */}
                  <label className="block text-gray-500 font-bold my-4">
                    Don't have an account?
                    <button className="cursor-pointer tracking-tighter ml-1 text-secondary border-b-2 hover:border-gray-400" onClick={() => setSignUp(true)}> 
                      Sign up
                    </button>
                  </label>
                </div> 
                <button type='submit' className="mt-3 bg-primary text-lg font-semibold w-full text-white rounded-lg px-6 py-3 block shadow-xl">
                  Login
                </button>
              </div>
            </form>
          </div>  
        </div>
        </div> 
      </div>
      ) : (
      <>
        <Register setSignUp={setSignUp} setLoggedIn={setLoggedIn}/>
      </>
      )}
    </>
  )
}

export default Login