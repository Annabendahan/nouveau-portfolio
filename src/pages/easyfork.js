import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/easyforkPic.png"
import pic2 from '../images/easyfork1.png';
import pic3 from '../images/easyfork2.png';
import pic4 from '../images/homeEasy.png';
 import previous from '../images/previous.png';
import '../components/projet.css'
import { Parallax } from 'react-scroll-parallax';


const Easyfork = () => (
  <Layout>
    <SEO title="Easyfork" />

        <Link to="/projets/" >  <img  src={previous} className="Previous" alt="fireSpot" />

  </Link>

      <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> EASYFORK</h2>
      <Parallax  y={[10, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
       </Parallax>
      <p> <span className="bold"> Projet </span>
      - Site co-developed at Le Wagon. You can order in advance in restaurants in order to reduce your waiting time.
        Home page with geolocation or search by category, menus order page, possibility of inviting friends to the order.
        </p>
        <p> <span className="bold"> Technos: </span> Framework <strong> Ruby On Rails .
        </strong> <strong> Authentification et authorization (Pundit)
        </strong>, paiement via <strong> Stripe </strong>, order with Ajax, <strong> Google maps API </strong>, <strong> Cloudinary
          </strong>... <span><svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">

      <Parallax  y={[10, -20]} tagOuter="figure">
        <img  src={pic4} className="" alt="fireSpot" />
    </Parallax>


      <Parallax  y={[10, -20]} tagOuter="figure">
        <img  src={pic2} className="" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[10, -10]} tagOuter="figure">
        <img  src={pic3} className="" alt="fireSpot" />
    </Parallax>

      </div>

  </Layout>
)

export default Easyfork

