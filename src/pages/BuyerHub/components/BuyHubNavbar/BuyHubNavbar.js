import React from 'react'
import {Link} from 'react-router-dom'

const BuyHubNavbar = () => {
  return (
    <>
        <nav className=''>
            <div className=''>
                <Link to="/" className='logo'> TOFA
                </Link>
            </div>
            <div>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div>
              <Link to="/details">Details</Link>
            </div>
        </nav>
    </>
  )
}

export default BuyHubNavbar