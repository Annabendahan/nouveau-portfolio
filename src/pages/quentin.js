import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/photomameri.png"
import pic2 from '../images/home-mameri.png';
import pic3 from '../images/expr-mamer.png';
import pic4 from '../images/contact-mameri.png';
 import previous from '../images/previous.png';
import '../components/projet.css'
import { Parallax } from 'react-scroll-parallax';


const Quentin = () => (
  <Layout>
    <SEO title="Quentin" />

        <Link to="/projets/" >  <img  src={previous} className="Previous" alt="fireSpot" />

  </Link>

      <div className="presProjet">
      <div  className="yellowTitle">
      </div>
      <h2 className="titleh2P"> QUENTIN MAMERI'S WEBSITE</h2>
      <Parallax  y={[10, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
       </Parallax>

       <p> <span className="bold"> <a href= "https://annabendahan.github.io/mameri/"  target="blank">  Visit Website </a> </span> </p>
      <p> <span className="bold"> Projet </span>
      - Site for Quentin's Mameri law-firm. Explain it's expertises fields, guide the user to the info he needs, possibility to publish articles, contact form.
        </p>
        <p> <span className="bold"> Technos: </span> Gatsby.js linked with Wordpress <strong>
        </strong>
         <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">

      <Parallax  y={[10, -20]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>


      <Parallax  y={[10, -20]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[10, -10]} tagOuter="figure">
        <img  src={pic4} className="" alt="fireSpot" />
    </Parallax>

      </div>

  </Layout>
)

export default Quentin

