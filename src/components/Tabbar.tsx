import { NavLink } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";

function Tabbar() {
  return (
    <>
      <nav className="w-full my-5 outline outline-gray-500 rounded p-5 px-10">
        <div className="w-full">
          <ul className="font-medium flex flex-row justify-start space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
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
            {/* Icons container now aligns perfectly to the right */}
            <li className="ml-auto">
          <ul className="flex flex-row items-center space-x-4 justify-end">
              <li><FiGithub className="cursor-pointer hover:text-white" /></li>
              <li><CiLinkedin className="cursor-pointer hover:text-white" /></li>
              <li><TiSocialLinkedin className="cursor-pointer hover:text-white" /></li>
            </ul>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Tabbar
