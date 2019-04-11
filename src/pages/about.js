import React from "react"
import { Link } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/Anna.png';
import '../components/about.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className= "part1-contact">
      <div className="ProfilePic">
        <img  src={pic1} className="projectPic" alt="fireSpot" />
        <div className="aboutPinkDiv"> </div>
      </div>
      <div className="DescA">
      <h2> ANNA BENDAHAN </h2>
        <div className="Desc">
          <h1> WEB DEVELOPMENT & WEB DESIGN </h1>
          <p> De la conception jusqu'au déploiement, je crée
           des applications web modernes et intuitives.
           En mêlant interface esthétique et développement solide,
           ces applications sont performantes et efficaces. </p>
           <h1> CONTACT </h1>
      <p> 0659133919 </p>
      <p> an.bendahan@gmail.com </p>
          <a target="_blank"  href="https://www.linkedin.com/in/anna-bendahan-55324113a/">
           <div className="Linkedin"> < FaLinkedin /> </div> </a>

        </div>
      </div>
    </div>



  </Layout>
)

export default SecondPage
