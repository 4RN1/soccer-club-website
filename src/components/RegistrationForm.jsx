import { useEffect } from 'react';
import '../css/registration.css'
import AOS from "aos";
function RegistrationForm() {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // once = animate only on first scroll
      }, []);
    
  
  return (
    
    <div className='regForm'>
      
<div className='reg-subtext'>
        <h2  data-aos="fade-up" data-aos-delay="300">მადლობა რომ გვირჩევთ ჩვენ!❤️</h2>
</div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSerVjPfSQlNvKWLFX2OqgMzrOdY13kImZxTx5DpAcCinmuNKA/viewform?embedded=true"
        width="100%"
        height="1127"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Player Registration Form"
        data-aos="fade-up" data-aos-delay="300"
      >
        მიმდინარეობს ჩატვირთვა…
      </iframe>
    </div>
  )
}

export default RegistrationForm
