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
          <p> Passionnée de code et design, je crée des sites
modernes et ergonomiques! </p>
          <div className="Linkedin"> < FaLinkedin /> </div>
        </div>
      </div>
    </div>


    <div className="part2-contact">
      <h2> CONTACT </h2>
      <p> 0659133919 </p>
      <p> an.bendahan@gmail.com </p>
    </div>
  </Layout>
)

export default SecondPage
