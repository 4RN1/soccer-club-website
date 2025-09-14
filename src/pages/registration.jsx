import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import Registration from '../components/RegistrationForm'
import Footer from '../components/FooterComp';
import AOS from "aos";
function Register() {

    useEffect(() => {
      AOS.init({ duration: 1000, once: true }); // once = animate only on first scroll
    }, []);
  
  
  return <div>
<Navbar/>
      <div className='reg-heading' >

        <h1 data-aos="fade-up" data-aos-delay="300">რეგისტრაცია</h1>
      </div>


    <div className='registration'>
    
    <Registration  />
    </div>

    <Footer/>
  </div>
}

export default Register