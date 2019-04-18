import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/todolistPic2.png"
import pic2 from '../images/todo.png';
import pic3 from '../images/todologin.png';
import '../components/projet.css'
import { Parallax } from 'react-scroll-parallax';


const Todolist = () => (
  <Layout>
    <SEO title="Page two" />

<Link to="/" > <div className="projetHeader"> <svg width="64" height="30" viewBox="0 0 64 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="27.1765" y2="-0.5" transform="matrix(0.735931 -0.677057 0.820905 0.571064 19 27.3999)" stroke="black"/>
<line y1="-0.5" x2="27.1765" y2="-0.5" transform="matrix(0.735931 0.677057 0.820905 -0.571064 19 26.6001)" stroke="black"/>
</svg>
 </div> </Link>

      <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> TODOLIST </h2>
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      <p>  <span className="bold"> Projet: </span> Application de gestion de tâches. Système de "post-it"
      avec différents niveaux d'urgence des tâches, ratio de complétion.  </p>
      <p><span className="bold"> Technos: </span> <strong> API Rails </strong> et front-end en <strong> React.js </strong>. Utilisation d' <stong> Axios </stong> pour les requêtes à l'API.  <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">

       <Parallax  y={[10, -50]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[20, -60]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>


      </div>

  </Layout>
)

export default Todolist

