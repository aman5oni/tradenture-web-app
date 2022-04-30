import React from 'react'
import "./Header.css"

function MyHeader() {
  return (
    <div className="headerMain">
        <div className="mainLogo">
            Logo
        </div>
        <div className='searchBar'>
            Search
        </div>
        <div className='loginButton'>
            Login
        </div>
    </div>
  )
}

export default MyHeader