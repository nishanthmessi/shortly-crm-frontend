import { Link, useNavigate } from "react-router-dom"
import BrandLogo from '../../img/stopwatch.png'
import { PieChart, Target, DollarSign, Users, Briefcase   } from "react-feather"

const Sidebar = ({ setLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
		sessionStorage.removeItem('token')
    setLoggedIn(false)
    navigate('/')
	}

  return (
    <>
    <aside className="w-64" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 px-6 bg-neutral h-screen text-secondary">
      <div className="text-center mb-16 mt-4">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2 mb-2" src={BrandLogo} alt="logo"/>
            <Link to='/home' className="text-primary font-bold text-3xl italic">Shortly</Link>
            </div>
        </div>
        <ul className="space-y-6">
          <li>
            <Link to='/dashboard' className="flex items-center p-2 text-base font-normal rounded-lg ">
              <PieChart/>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/leads' className="flex items-center p-2 text-base font-normal rounded-lg ">
              <Target/>
              <span className="ml-3">Leads</span>
            </Link>
          </li>
          <li>
            <Link to='/deals' className="flex items-center p-2 text-base font-normal rounded-lg ">
              <DollarSign/>
              <span className="flex-1 ml-3 whitespace-nowrap">Deals</span>
            </Link>
          </li>
          <li>
            <Link to='/contacts' className="flex items-center p-2 text-base font-normal rounded-lg ">
              <Users/>
              <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
            </Link>
          </li>
          <li>
            <Link to='/accounts' className="flex items-center p-2 text-base font-normal rounded-lg ">
              <Briefcase/>
              <span className="flex-1 ml-3 whitespace-nowrap">Accounts</span>
            </Link>
          </li>  
        </ul> 
        <div className="flex justify-center mt-12">
          <button className="btn btn-primary font-bold" onClick={handleLogout}>Log out</button>
        </div>    
    </div>
    </aside>
    </>
  )
}

export default Sidebar