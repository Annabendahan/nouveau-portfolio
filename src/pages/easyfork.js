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
import { Parallax } from 'react-scroll-parallax';


const Easyfork = () => (
  <Layout>
    <SEO title="Easyfork" />

        <Link to="/" > <div className="projetHeader"> <svg width="64" height="30" viewBox="0 0 64 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="27.1765" y2="-0.5" transform="matrix(0.735931 -0.677057 0.820905 0.571064 19 27.3999)" stroke="black"/>
<line y1="-0.5" x2="27.1765" y2="-0.5" transform="matrix(0.735931 0.677057 0.820905 -0.571064 19 26.6001)" stroke="black"/>
</svg>
 </div> </Link>

      <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> EASYFORK</h2>
      <Parallax  y={[20, -10]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
       </Parallax>
      <p> <span className="bold"> Projet: </span> Site co-développé au Wagon, permet de réserver et
       commander à l'avance dans les restos pour ne pas avoir
        à attendre!
        Page d'accueil avec géolocalisation et/ou recherche par catégorie,
        page de commande de menus, possibilité d'inviter des amis à la
        commande. </p>
        <p> <span className="bold"> Technos: </span> Framework <strong> Ruby On Rails .
        </strong> <strong> Authentification et authorization (Pundit)
        </strong>, paiement via <strong> Stripe </strong>, panier de
         commande Ajax, <strong> Google maps API </strong>, <strong> Cloudinary
          </strong>... <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
      <Parallax  y={[10, -40]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[10, -40]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>

      </div>

  </Layout>
)

export default Easyfork

