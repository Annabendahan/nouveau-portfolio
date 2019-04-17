import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/todolistPic.png"
import pic2 from '../images/todo.png';
import pic3 from '../images/todologin.png';
import '../components/projet.css'


const Todolist = () => (
  <Layout>
    <SEO title="Page two" />



      <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> TODOLIST </h2>
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      <p>  <span className="bold"> Projet: </span> Petite app pour gérer ses tâches. Système de "post-it"
      avec différents niveaux d'urgence des tâches, ratio de complétion. <strong>
      API Rails </strong> et front-end en <strong> React.js </strong>. Utilisation d' <stong> Axios </stong> pour les requêtes à l'API.  <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
       <img  src={pic3} className="" alt="fireSpot" />
      <img  src={pic2} className="" alt="fireSpot" />

      </div>

  </Layout>
)

export default Todolist

