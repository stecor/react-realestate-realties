import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div className='logo'>
          <span className='detailLogo'>realties.ca</span>
          <br />
          real estate
        </div>

        <nav>
          <a href='#1'>Create ads</a>
          <a href='#1'>About us</a>
          <a href='#1'>Log in</a>
          <a href='#1' className='register-btn'>
            Register
          </a>
        </nav>
      </header>
    </div>
  )
}

export default Header
