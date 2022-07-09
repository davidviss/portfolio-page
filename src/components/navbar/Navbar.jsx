import React, {useState} from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

const Menu = () => (
  <>
  <p><a href='#about'> About me</a></p>
  <p><a href='#skills'> Skills</a></p>
  <p><a href='#projects'> Projects</a></p>
  <p><a href='#contact'> Contact me</a></p>
  </>
  
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='prof__navbar'>
      <div className='prof__navbar-links'>
        <div className='prof__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='prof__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='prof__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color="#202129" size={27} onClick={ () => setToggleMenu(false)}/>
        : <RiMenu3Line color="#202129" size={27} onClick={ () => setToggleMenu(true)}/>
          }
      {toggleMenu && (
        <div className='prof__navbar-menu_container scale-up-center'>
          <div className='prof__navbar-menu_container-links'>
            <Menu />
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar