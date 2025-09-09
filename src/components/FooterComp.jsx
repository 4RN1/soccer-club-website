import { Link } from "react-router-dom";
import '../css/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">

        {/* Contact */}
        <div className="footer-section">
  <h3>კონტაქტი</h3>
  <div className="contact-links">
    <p className="contact-item">📞 <a href="tel:+995123456789">+995 123 456 789</a></p>
    <p className="contact-item">✉️ <a href="mailto:test123@gmail.com">test123@gmail.com</a></p>
    <p className="contact-item">📘 <a href="http://facebook.com" target="_blank" rel="noreferrer">Facebook Group</a></p>
    <p className="contact-item">📸 <a href="http://instagram.com" target="_blank" rel="noreferrer">Instagram</a></p>
  </div>
</div>


        {/* Quick Links */}
        <div className="footer-section">
          <h3>სწრაფი ლინკი</h3>
          <p><Link to="/">მთავარი</Link></p>
          <p><Link to="/about">ჩვენს შესახებ</Link></p>
          <p><Link to="/schedule">განრიგი</Link></p>
          <p><Link to="/news">ახალი ამბები</Link></p>
          <p><Link to="/gallery">გალერეა</Link></p>
          <p><Link to="/registration">რეგისტრაცია</Link></p>
        </div>

        {/* Map */}
        <div className="footer-section footer-map">
          <h3>ლოკაცია</h3>
          <iframe
            src="https://maps.google.com/maps?q=Tbilisi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Footer bottom text */}
      <div className="footer-bottom">
        <p>© 2025 Soccer Team – All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
