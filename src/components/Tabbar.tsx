import { NavLink } from "react-router-dom"
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

function Tabbar() {
  return (
    <>
      <nav className="w-full my-5 rounded-md bg-limie p-5 px-10 flex items-center text-limietxt">
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-limietxt-active' : 'text-heading focus:text-limietxt'}`
            }>Home</NavLink>
          </li>
          <li> 
            <NavLink to="/About" className={({ isActive }) =>
              `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-limietxt-active' : 'text-heading focus:text-limietxt'}`
            }>About Me</NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={({ isActive }) =>
              `inline-block transform transition-all duration-300 hover:scale-150 cursor-pointer ${isActive ? 'text-limietxt-active' : 'text-heading focus:text-limietxt'}`
            }>Projects</NavLink>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-5 text-xl">
          <a
            href="https://github.com/danemacfadden"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:scale-150 text-heading active:text-white"
            aria-label="GitHub"
          >
            <TbBrandGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/danemacfadden"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:scale-150 text-heading active:text-white"
            aria-label="LinkedIn"
          >
            <TbBrandLinkedin />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Tabbar