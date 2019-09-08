 import React, {Component} from 'react';
 import { Link } from "gatsby";
 import { FaLocationArrow, FaHeart, FaCursor} from 'react-icons/fa';
 import pic1 from '../images/brooke-lark-176364-unsplash.jpg';
 import Projet1 from '../components/projet1'
import Projet2 from '../components/projet2'
import Projet3 from '../components/projet3'
 import Layout from "../components/layout"
 import previous from '../images/previous.png';
 import next from '../images/next.png';
 import pic5 from "../images/phone.png"
 import { Parallax } from 'react-scroll-parallax';
 import { FaInstagram, FaLinkedin } from 'react-icons/fa';


class About extends Component {

  state={
    mount: false
  }


componentDidMount() {
this.setState({ mount: true
})}

render(){






  return(

    <div className="background">
      <Layout>



<Parallax  y={[20, -20]} tagOuter="figure">
     <div className="contactbig">
     <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all 2s ease-out`
     }}> <h2> <a target= "blank" href= "https://www.linkedin.com/in/anna-bendahan-55324113a/" > <FaLinkedin /> </a>
      <a target= "blank" href="https://www.instagram.com/annabdh_/"> <FaInstagram/>  </a> </h2>
     <p> Front-end dev - UI UX Design - Javascript - REST API - RoR - React - CSS - GraphQL - HTML - Illustrator - Indesign -
     Motion Design - Video - Sketch - Figma - Gatsby </p>
      <p> Project?  Question ? Contact-me!</p>
      </div>
        <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all 1s ease-out`
     }}>
        <div className="contact">
          <div className="email">
           <div  className="yellowTitle5">  </div> <h3 className="titleh3"> EMAIL </h3>
           <p> an.bendahan@gmail.com </p>
          </div>
          <div className="call">
           <div  className="yellowTitle3">  </div> <h3 className="titleh3"> TELEPHONE </h3>
           <p> 0659133919</p>
          </div>
          </div>
       </div>
       <div style = {{
      transform: this.state.mount? `translateY(0px)`: `translateY(-200px)`,
      transition: ` all .5s ease-out`
     }}>
       <Parallax  y={[20, 0]} tagOuter="figure">
      <img  src={pic5} className="picContact" alt="fireSpot" />
       </Parallax>
      <h3> THANKS FOR VISITING! </h3>
      <div className = "heart" > <FaHeart /> </div>
      </div>

       </div>
 </Parallax>





 <form name="contact" method="POST" data-netlify="true" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


      </Layout>


      <div style={{
      background: `#EAFE0A`,
      position: `relative`,
      zIndex: `50`,
      marginLeft: `-20px`,
      width: `120%`,
      height: `220vh`,

            transform: this.state.mount? `translateY(-500vh)` : `translateY(-200vh)`,
    transition: ` all 2s ease-out`}}>
     </div>
    </div>

    )
}

}



export default About;
