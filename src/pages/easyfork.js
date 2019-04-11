import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
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
    <a target="_blank"  href= "https://github.com/xeviros/easyfork" >
     <div className="github"> < FaGithub /> </div> </a>
    </div>


    <div className="projetRole">
      <h3> PROJET & ROLE </h3>
      <p> Site co-développé au Wagon, permet de réserver et commander à
       l'avance dans les restos pour ne pas avoir à attendre! Framework
       <strong> Ruby On Rails . </strong> <strong> Authentification
       et authorization (Pundit) </strong>, paiement via <strong>
       Stripe </strong>, panier de commande Ajax, <strong> Google maps API </strong>, <strong> Cloudinary </strong>... </p>

    </div>

    <h2 className="projetDetailsTitle"> Details </h2>

    <div className= "screenShot">
      <img  src={pic2}  alt="fireSpot" />
    </div>

        <div class="next">
        <Link to="/todolist/" className="nextProject"> NEXT PROJET
        <span className="go"> <FaLocationArrow  /> </span> </Link>
        </div>

  </Layout>
)

export default Easyfork

