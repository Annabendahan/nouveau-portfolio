import React from "react"
import { Link } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from '../images/rentmanPic.png';
import pic2 from '../images/rentman banner.png';
import pic3 from '../images/bannerrentman-fba0bd45ba602afc44bae6b94aef9a63.png';
import '../components/about.css'
import pic4 from '../images/banner2.png';
import { Parallax } from 'react-scroll-parallax';

const Rentman = () => (
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
      <div  className="yellowTitle3">
      </div>
      <h2 className="titleh2P"> RENTMAN</h2>
      <Parallax  y={[10, 0]} tagOuter="figure">
      <img  src={pic1} className="projetPic" alt="fireSpot" />
      </Parallax>
      <p> <strong> Marketing digital </strong> - design pour le logiciel de gestion Rentman
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
