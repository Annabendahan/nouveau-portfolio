import React from "react"
import { Link } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/brooke-lark-176364-unsplash.jpg"
import pic2 from '../images/easyfork.png';
import '../components/projet.css'


const Easyfork = () => (
  <Layout>
    <SEO title="Page two" />

<div className="projets">
    <p className="projectDetailName"> EASYFORK </p>
     <div className="bigNumber"> 1 </div>
     <div style = {{
      width: `400px`,
      transform: `rotate(90deg)`,
      position:`relative`,
      zIndex: `10`
     }}>
     <img  src={pic1} alt="fireSpot" />
     </div>
     <div className="pinkDivProjet">  </div>
    </div>


    <div className="projetRole">
      <h3> PROJET & ROLE </h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Beatae amet officiis qui necessitatibus sit maxime,
      cum dicta recusandae quia, eligendi fuga pariatur impedit,
       distinctio iusto ex voluptatem. Rerum inventore, consequuntur. </p>

    </div>

    <h2 className="projetDetailsTitle"> Details </h2>

    <div className= "screenShot">
      <img  src={pic2}  alt="fireSpot" />
    </div>

  </Layout>
)

export default Easyfork

