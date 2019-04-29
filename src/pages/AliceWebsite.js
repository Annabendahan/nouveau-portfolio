import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/aliceP.png"
import pic2 from '../images/alice1.png';
import pic3 from '../images/alice2.png';
import pic4 from '../images/alice3.png';
import pic5 from '../images/alice4.png';
import '../components/projet.css'
import { Parallax } from 'react-scroll-parallax';


const AliceWebsite = () => (
  <Layout>
    <SEO title="Page two" />

<Link to="/" > <div className="projetHeader"> <svg width="86" height="79" viewBox="0 0 86 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<line x1="22.8934" y1="42.9907" x2="50.1312" y2="12.3394" stroke="black" stroke-width="5" stroke-linejoin="round"/>
<line x1="53.2942" y1="67.8276" x2="23.294" y2="39.8276" stroke="black" stroke-width="5" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="86" height="79" fill="white"/>
</clipPath>
</defs>
</svg>

 </div> </Link>

      <div className="presProjet">
      <div  className="yellowTitle4">
      </div>
      <h2 className="titleh2P"> ALICE WEBSITE </h2>
      <Parallax  y={[15, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      </Parallax>
      <p>  <span className="bold"> Projet: </span> Site internet d'Alice, jeune styliste/modéliste. Description des collections,
      mise en valeur des vêtements, chartre graphique qui rappelle les coloris de sa collection Heures de Pointe. </p>
      <p><span className="bold"> Technos: </span> <strong> API Rails </strong> et front-end en <strong> Gatsby/React.js </strong>. <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">

       <Parallax  y={[10, -10]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[-5, 5]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>


    <Parallax  y={[5, -5]} tagOuter="figure">
        <img  src={pic5} className="" alt="fireSpot" />
    </Parallax>


    <Parallax  y={[-10, 10]} tagOuter="figure">
        <img  src={pic4} className="" alt="fireSpot" />
    </Parallax>


      </div>

  </Layout>
)

export default AliceWebsite

