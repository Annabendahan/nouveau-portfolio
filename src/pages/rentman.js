import React from "react"
import { Link } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/todolistPic2.png';
import pic2 from '../images/rentman banner.png';
import pic3 from '../images/bannerrentman-fba0bd45ba602afc44bae6b94aef9a63.png';
import '../components/about.css'
 import previous from '../images/previous.png';
import pic4 from '../images/banner2.png';
import { Parallax } from 'react-scroll-parallax';

const Rentman = () => (
  <Layout>
    <SEO title="Page two" />

    <Link to="/projets/" > <img  src={previous} className="Previous" alt="fireSpot" />
 </Link>

    <div className="presProjet">
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> RENTMAN</h2>
      <Parallax  y={[10, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      </Parallax>
      <p> <strong> Marketing digital </strong> - design pour le logiciel de gestion de location Rentman
      (Site internet, bannières pour publicités Facebook, salons)  <span><svg width="42"
      height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="7.5" x2="38" y2="7.5" stroke="black" stroke-width="5"/>
                        </svg></span>  </p>
      </div>

      <div className="screenShot">
      <Parallax  y={[10, -20]} tagOuter="figure">
       <img  src={pic2} className="picdesign" alt="fireSpot" />
    </Parallax>

    <Parallax  y={[10, -10]} tagOuter="figure">
       <img  src={pic3} className="picdesign" alt="fireSpot" />
    </Parallax>


 <Parallax  y={[10, -20]} tagOuter="figure">
       <img  src={pic4} className="picdesign" alt="fireSpot" />
    </Parallax>


      </div>




  </Layout>
)

export default Rentman
