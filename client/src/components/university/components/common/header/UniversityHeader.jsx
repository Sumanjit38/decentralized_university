import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/admin'>Administration</Link>
            </li>
            <li>
              <Link to='/examiner'>Examiner</Link>
            </li>
            <li>
              <Link to='/teachers'>Teachers</Link>
            </li>
            <li>
              <Link to='/students'>Students</Link>
            </li>
            <li>
              <Link to='/staffs'>Staffs</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/sessions'>Sessions</Link>
            </li>
            <li>
              <Link to='/policies'>Policies</Link>
            </li>
            <li>
              <Link to='/subjects'>Subjects</Link>
            </li>
            <li>
              <Link to='/marks'>Marks</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>VIEW CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header