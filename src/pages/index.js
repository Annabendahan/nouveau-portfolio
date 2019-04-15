import React, {Component} from "react"
import { Link } from "gatsby"
import { FaLocationArrow, FaHeart } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/index.css'
import scrollToComponent from 'react-scroll-to-component';
import pic1 from '../images/Anna.png';
import pic2 from "../images/easyforkPic.png"
import pic3 from "../images/todolistPic.png"
import pic4 from "../images/rentmanPic.png"
import pic5 from "../images/pavan-trikutam-1660-unsplash.jpg"

import Projets from '../components/projets'


class  IndexPage extends Component {

  render(){
    return(
          <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />



      <div className="homeFlex">
        <div className="leftFlex">
          <h1 onClick={() => scrollToComponent(this.Display, { offset: 0, align: 'top', duration: 1500})} > HELLO. </h1>
           <div  className="yellowTitle">  </div> <h2> WEB DESIGN & DEVELOPMENT </h2>
          <p> Bienvenue sur mon portfolio! Je suis <strong> Anna Bendahan, </strong> developpeuse full-stack
          spécialisée en front-end et passionée de design. De la conception jusqu'au déploiement, je crée
             des applications web modernes et intuitives.
             En mêlant interface esthétique et développement solide,
             ces applications sont performantes et efficaces.
             <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black"/>
                        </svg></span></p>
        </div>
          <img  src={pic1} className="picture" alt="fireSpot" />
      </div>


      <section className= "Display" ref={(section) => { this.Display = section; }}> </section>
      <div  className="yellowTitle2">
      </div>
      <h2 className="titleh2"> PROJETS </h2>
      <div className="AllProjets">

      <Link to="/todolist/">
      <div className="white-projet">
        <div className="picpro">
          <img  src={pic3} className="" alt="fireSpot" />
        </div>
        <h3> TODOLIST </h3>
        <p> Design & Code </p>
      </div>
      </Link>

      <Link to="/easyfork/">
      <div className="white-projet second">
        <div className="picpro">
          <img  src={pic2} className="" alt="fireSpot" />
        </div>
          <h3> EASYFORK </h3>
          <p> Design & Code </p>
      </div>
      </Link>

    <Link to="/rentman/">
      <div className="white-projet">
        <div className="picpro">
          <img  src={pic4} className="" alt="fireSpot" />
        </div>
        <h3> RENTMAN </h3>
        <p> Design </p>
      </div>
      </Link>
  </div>




    <div  className="yellowTitle2">  </div> <h2 className="titleh2"> CONTACT </h2>


     <div className="contactbig">
        <div className="contact">
          <div className="email">
           <h3> EMAIL MOI </h3>
           <p> an.bendahan@gmail.com </p>
          </div>
          <div className="call">
           <h3> APPELLE MOI </h3>
           <p> 0659133919</p>
          </div>
       </div>
      <img  src={pic5} className="picContact" alt="fireSpot" />
      <h3> MERCI POUR LA VISITE ! </h3>
      <div className = "heart" > <FaHeart /> </div>

       </div>





  </Layout>

      )
  }
}



export default IndexPage
