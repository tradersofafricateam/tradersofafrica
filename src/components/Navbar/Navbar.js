import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='nav-bar-container'>
                <Link to="/" className='logo'> TOFA
                </Link>
            </div>
            <div>
              <div>
                <Link to="/story">
                  Our Story
                </Link>
              </div>
              <div>
                <Link to="/what-we-do">
                  What we do
                </Link>
              </div>
              <div>
                <Link to="/impact">
                  Our Impact
                </Link>
              </div>
              <div>
                <Link to="/market">
                  Market Intelligence
                </Link>
              </div>
             <div>
                <Link to="/buyers-hub">
                    Buy Commodities
                </Link>
             </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar