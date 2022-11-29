import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className= {`flex flex-col justify-center items-center h-screen -mt-14 px-4 font-bold`}>
        <div className="flex-col text-center space-y-6">
          <h1 className='text-7xl font-semibold'>Welcome</h1>
          <p className="text-4xl">A platform built for a new way of working</p>
          <p className="text-xl">"Best CRM software that makes life easy"</p> 
        </div>
        <div className="mt-20">
          <Link to='/dashboard' className="btn btn-primary rounded-md py-3 px-6">
            View Dashboard<span className="ml-1 font-bold">→</span> 
          </Link>   
        </div>
        <div className="mt-6 font-medium">
          <p>Unlimited free plan. No credit card needed!</p>
        </div> 
      </div>
    </>
  )
}

export default Home