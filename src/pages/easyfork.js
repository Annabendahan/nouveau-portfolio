import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/easyforkPic.png"
import pic2 from '../images/easyfork1.png';
import pic3 from '../images/easyfork2.png';
import '../components/projet.css'


const Easyfork = () => (
  <Layout>
    <SEO title="Easyfork" />



      <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> EASYFORK</h2>
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      <p> Site co-développé au Wagon, permet de réserver et
       commander à l'avance dans les restos pour ne pas avoir
        à attendre!
        Page d'accueil avec géolocalisation et/ou recherche par catégorie,
        page de commande de menus, possibilité d'inviter des amis à la
        commande.  Framework <strong> Ruby On Rails .
        </strong> <strong> Authentification et authorization (Pundit)
        </strong>, paiement via <strong> Stripe </strong>, panier de
         commande Ajax, <strong> Google maps API </strong>, <strong> Cloudinary
          </strong>... <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
      <img  src={pic2} className="" alt="fireSpot" />
       <img  src={pic3} className="" alt="fireSpot" />
      </div>

  </Layout>
)

export default Easyfork

