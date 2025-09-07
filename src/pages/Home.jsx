import Navbar from "../components/Navbar";

import "../css/Home.css";

function Home() {
  return (
    <div>
      <div className="landing-page">
        <Navbar />
        <div className="wrapper">
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
            <button className="to-registration">რეგისტრაცია</button>
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
