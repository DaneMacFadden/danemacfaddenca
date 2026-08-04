import { NavLink } from 'react-router-dom'

function Tabbar() {
  return (
    <>
      <nav className="w-full my-5 outline outline-gray-500 rounded p-5 px-10">
        <div className="md:w-auto">
          <ul className="font-medium flex justify-start flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-white' : 'text-heading focus:text-white'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/About" 
                className={({ isActive }) => 
                  `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-white' : 'text-heading focus:text-white'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Projects"
                className={({ isActive }) => 
                  `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-white' : 'text-heading focus:text-white'}`
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Tabbar
