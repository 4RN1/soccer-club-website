import Navbar from '../components/Navbar'
import '../css/about.css'
function About() {

const questions =[
  {question:"ვინ ვართ ჩვენ?" ,  answer:"ჩვენ ვართ test ჯგუფი ახალი შექმნილი რომელიც ორიენტირებულია პატარა ფეხბურთში დაინტერესებული ბავშვების..."},
  {question:"რამდენის წლისას შეუძლია დარეგისტრირება?" ,  answer:"ბავშები 6-დან 12 წლამდე შეუძლიათ დარეგისტრირდნენ ჩვენ გუნდში"},
  {question:"როგორ დავრეგისტრიდე?" ,  answer:"მთავარ გვერძე რეგისტრაციის ღილაკზე დაჭერით გადაგიყვანს სარეგისტრაციო გვერძე ინფორმაციის შეყვანის შემდეგ ჩვენი ერთ-ერთი სტაფის წევრი დაგიკავშირდებათ და გაგაცნობთ დეტალებს"},
]




  return <div>
      <Navbar/>
      <div className="about-head">
      <div className="about-heading">

      </div>

      <div className="about-text">

        <h1>ჩვენს შესახებ</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eum dolor eos cumque nulla quo corrupti explicabo error. Maiores totam blanditiis maxime, reprehenderit iste nesciunt aut voluptates atque provident cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsam nulla provident molestiae totam reiciendis fuga nemo aliquid quia quasi, vero possimus, corrupti tempora? Dolorum cum aliquam magnam praesentium?</p>

        <h2>ხშირად დასმული კითხვები</h2>


    
      </div>


      </div>


  </div>
}

export default About