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
      <div  className="yellowTitle2">
      </div>
      <h2 className="titleh2"> TODOLIST </h2>
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      <p> Hello je suis web designer & developer
        "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
      <img  src={pic2} className="" alt="fireSpot" />
      <img  src={pic3} className="" alt="fireSpot" />
      </div>

  </Layout>
)

export default Todolist

