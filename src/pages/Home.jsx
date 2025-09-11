import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {

const [show, setShow] = useState(false)

useEffect(()=> {
  setShow(true)
}, [])

  return (
    <div>
      <div className ="landing-page">
        <Navbar />
        <div className={`wrapper ${show ? " show" : ""}`}>
          <div className="heading">
            <h1>თამაშის დროა!</h1>
            <div className="subtext-background">
            <ul>
              <li>შემოუერთდი ჩვენს გუნდს, აიმაღლე და განავითარე შენი უნარები
              ფეხბურთში🧠.</li>
              <li> გახდი ჩვენი გუნდის მნიშვნელოვანი წევრი😎</li>
              <li>ერთად ვიბრძოლოთ <span className="win">გამარჯვებისთვის!</span>⚽🥇</li>
            </ul>
              
             
           
          
</div>
            <Link to="/register" className="to-registration">
  რეგისტრაცია
</Link>
          </div>

          <div className="image-wrapper">
            <img
              src="./src/assets/landing-guy.png"
              alt="guy"
              className="landing-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
