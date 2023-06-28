import React , {useState} from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constant/images'
import './navbar.css'

const NavLinks = () => (
  <>
    <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#aboutus">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
  </>
)

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <NavLinks />
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login</a>
        <div />
        <a href="#register" className='p__opensans'>Register</a>
      </div>

      {/* small screens */}
      {/* <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/>

        {toggleMenu && (
           <div className='app__navbar-smallscreen_overlay flex__center slide-bottom active'>
           <MdOutlineRestaurantMenu fontSize={27} onClick={() => {setToggleMenu(false)}} className='overlay__close'/>
           <ul className='app__navbar-smallscreen_links'>
             <li className='p__opensans'><a href="#home">Home</a></li>
             <li className='p__opensans'><a href="#aboutus">About</a></li>
             <li className='p__opensans'><a href="#menu">Menu</a></li>
             <li className='p__opensans'><a href="#awards">Awards</a></li>
             <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div> */}

      <div className='app__navbar-smallscreen'>
        {toggleMenu ?
          <MdOutlineRestaurantMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(false)}}/> :
          <GiHamburgerMenu fontSize={27} color='#fff' onClick={() => {setToggleMenu(true)}} /> 
        }

        {toggleMenu && (
          <div className='app__navbar-smallscreen-container slide-bottom'>
            <ul className='app__navbar-smallscreen-links'>
              <NavLinks />
            </ul>
            <div className='app__navbar-smallscreen-login'>
              <a href="#login" className='p__opensans'>Sign Up </a>
              <div /> 
              <a href="#register" className='p__opensans'>Register</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


export default Navbar