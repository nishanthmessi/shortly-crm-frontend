import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <div className="navbar px-12 bg-neutral text-secondary">
      <div className="flex-1">
        {/* <Link className="btn btn-ghost normal-case text-3xl">Shortly</Link> */}
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt=""/>
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>Profile</Link></li>
            <li><Link>Settings</Link></li>
            <li><Link>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header