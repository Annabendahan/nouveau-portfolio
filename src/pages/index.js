import React from "react"
import { Link } from "gatsby"
import { FaLocationArrow } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/index.css'
import pic1 from "../images/brooke-lark-176364-unsplash.jpg"
import pic2 from "../images/workshop-1116436-unsplash.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Link to="/easyfork/">
    <div className="projets">
      <p className="projectName"> EASYFORK <span className= "go-icone"> <FaLocationArrow  /></span> </p>
      <p className="Decouvrir"> Découvrir </p>
       <div className="bigNumber"> 1 </div>
       <div style = {{
        width: `300px`,
        transform: `rotate(90deg)`,
        position:`relative`,
        zIndex: `10`
       }}>
       <img  src={pic1} className="projectPic" alt="fireSpot" />
       </div>
       <div className="pinkDiv">  </div>
    </div></Link>

     <Link to="/todolist/">
    <div className="projets">
      <p className="projectNameT"> TODOLIST <span className= "go-icone"> <FaLocationArrow  /></span> </p>
      <p className="Decouvrir"> Découvrir </p>
       <div className="bigNumberT"> 2 </div>
       <div style = {{
        width: `450px`,
        position:`relative`,
        zIndex: `10`
       }}>
       <img  src={pic2} className="projectPic" alt="fireSpot" />
       </div>
       <div className="pinkDivT">  </div>
    </div></Link>




    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
