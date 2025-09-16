import { useState } from 'react'
import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <div className='container'>
    

      <div className={`navbar ${show ? "show" : ""}`}>
           <Link to={'/'}><img src="/logo.png" alt="logo" className='logo' /></Link>
        <ul className={`nav-links ${show ? 'active' : ""}`}>
         
          <li><Link to="/">მთავარი</Link></li>
          <li><Link to="/about">ჩვენს შესახებ</Link></li>
          <li><Link to="/schedule">განრიგი / პროგრამები</Link></li>
          <li><Link to="/news">ახალი ამბები</Link></li>
          <li><Link to="/gallery">გალერეა</Link></li>
          <li><Link to="/registration">რეგისტრაცია</Link></li>
        </ul>
        <button
          className='toggle-menu'
          onClick={() => setShow(!show)}
        >
          {show ? '✖' : "☰"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
