import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {

const [show , setShow] = useState(false)


useEffect(()=> {
  setShow(true)
}, [])

  return <div className={`navbar ${show ? "show" : ""}`}>
    <ul >
      <li><Link to="/">მთავარი</Link></li>
        <li><Link to="/about">ჩვენს შესახებ</Link></li>
        <li><Link to="/schedule">განრიგი / პროგრამები</Link></li>
        <li><Link to="/news">ახალი ამბები</Link></li>
        <li><Link to="/gallery">გალერეა</Link></li>
        <li><Link to="/registration">რეგისტრაცია</Link></li>
    </ul>
  </div>
}

export default Navbar