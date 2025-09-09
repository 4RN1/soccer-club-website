import { useEffect } from "react";
import Footer from "../components/FooterComp"
import "../css/Schedule.css"
import AOS from "aos";
import Navbar from "../components/Navbar";
function Schedule() {
  
  const schedule = [
    {day:"ორშაბათი", time:"16:00–18:00" , location:"დირსის სტადიონი" , notes:"ვარჯიში"},

    {day:"სამშაბათი" , time:"დასვენება" , location:"დასვენება", notes:"დასვენება"},

    {day:"ოთხშაბათი", time:"16:00–18:00" , location:"დირსის სტადიონი" , notes:"ვარჯიში" },

    {day:"ხუთშაბათი", time:"დასვენება" , location:"დასვენება" , notes:"დასვენება"},

    {day:"პარასკევი", time:"16:00–18:00" , location:"დირსის სტადიონი" , notes:"ვარჯიში"},

    {day:"შაბათი", time:"დაელოდეთ ინფოს" , location:"დაელოდეთ ინფოს" , notes:"თამაში/დასვენება/ვარჯიში"},

    {day:"კვირა", time:"დაელოდეთ ინფოს" , location:"დაელოდეთ ინფოს", notes:"თამაში/დასვენება/ვარჯიში"},

  ]
  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); // once = animate only on first scroll
    }, []);
  
  return <div>
    <Navbar/>
    <div className="schedule">
      <div className="schedule-heading"data-aos="fade-up" data-aos-delay="100" >
       <h1 data-aos="fade-up" data-aos-delay="200">ცხრილი</h1>
      </div>
<div className="scedule-side">
  {schedule.map((session, idx) => (
            <div key={idx} className="schedule-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="schedule-text">
                
              <h2>{session.day}</h2>
              <hr/>
              <p><strong>დრო:</strong> {session.time}</p>
              <p><strong>ადგილი:</strong> {session.location}</p>
              <p><strong>შენიშვნა:</strong> {session.notes}</p>
              </div>
            </div>
          ))}

    </div>
    </div>
  <Footer />
  </div>
}

export default Schedule