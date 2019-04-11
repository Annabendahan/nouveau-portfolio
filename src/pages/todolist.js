import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/workshop-1116436-unsplash.jpg"
import pic2 from '../images/todo.png';
import pic3 from '../images/todologin.png';
import '../components/projet.css'


const Todolist = () => (
  <Layout>
    <SEO title="Page two" />

<div className="projets">
    <p className="projectDetailName">TODOLIST </p>
     <div className="bigNumber"> 2 </div>

     <div style = {{
      width: `550px`,
      position:`relative`,
      zIndex: `10`
     }}>
     <img  src={pic1} alt="fireSpot" />
     </div>
     <div className="pinkDivProjetTodolist">  </div>
     <a target="_blank"  href= "https://github.com/Annabendahan/todolist" >
     <div className="github"> < FaGithub /> </div> </a>
    </div>



    <div className="projetRole">
      <h3> PROJET & ROLE </h3>
      <p>   <strong> API Rails </strong> et front-end en <strong> React.js </strong>. Utilisation d' <stong> Axios </stong> pour les requêtes à l'API.   </p>

    </div>

    <h2 className="projetDetailsTitle"> Details </h2>

    <div className= "screenShot">
      <img  src={pic3}  alt="fireSpot" />
      <img  src={pic2}  alt="fireSpot" />
    </div>

  </Layout>
)

export default Todolist

