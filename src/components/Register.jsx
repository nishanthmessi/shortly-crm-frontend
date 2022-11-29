import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../img/stopwatch.png'

const Register = ({ setSignUp, setLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [disabled, setDisabled] = useState(true)

  const navigate = useNavigate()

  useEffect(() =>  {
    if(username && signUpEmail && signUpPassword) {
      setDisabled(false)
    } else {
			setDisabled(true)
		}
  }, [username, signUpEmail, signUpPassword])

  const handleSignUp = async (e) => {
    e.preventDefault()

    const user = {
      username: username,
      email: signUpEmail,
      password: signUpPassword, 
    }

    await axios.post('/register', user).then((response) => {
      sessionStorage.setItem('token', response.data.token)
      setLoggedIn(true)
      navigate('/home')
    })
    .catch((err) => {
      console.log(err.res.data);
    })
  }

  return (
    <>
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
              Register your account!
            </div>         
            <form className="mt-8 max-w-sm mx-auto" onSubmit={handleSignUp}>
              <div className="mx-auto max-w-lg">
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Username</span>
                  <input 
                    placeholder="your username" 
                    type="text"
                    className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md text-neutral focus:placeholder-gray-500 bg-white focus:border-primary focus:outline-none"
                    value={username}
							      onChange={(e) => setUsername(e.target.value)}
							      required
                  />
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Email</span>
                  <input 
                    placeholder="your email" 
                    type="email"
                    className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md text-neutral focus:placeholder-gray-500 bg-white focus:border-primary focus:outline-none"
                    value={signUpEmail}
							      onChange={(e) => setSignUpEmail(e.target.value)}
							      required
                  />
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Password</span>
                  <div className="relative">
                    <input 
                      type='password' 
                      placeholder="your password" 
                      className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md text-neutral focus:placeholder-gray-500 bg-white focus:border-primary focus:outline-none"
                      value={signUpPassword}
                      onChange={(e) => setSignUpPassword(e.target.value)}
                      required
                      />
                  </div>
                </div>
                <div className="flex flex-col text-center">  
                  <label className="block text-gray-500 font-bold my-4 tracking-tighter">
                    Already have an account?
                    <button className="tracking-tighter ml-1 text-secondary border-b-2 hover:border-gray-400" onClick={() => setSignUp(false)}> 
                      Sign in
                    </button>
                  </label>
                </div> 
                <button type='submit' className="mt-3 bg-primary text-lg font-semibold w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white" disabled={disabled}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Register