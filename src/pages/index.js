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
      <p className="Decouvrir"> <svg width="154" height="134" viewBox="0 0 154 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.5 60.5C131.5 87.5572 109.343 109.5 82 109.5C54.6572 109.5 32.5 87.5572 32.5 60.5C32.5 33.4428 54.6572 11.5 82 11.5C109.343 11.5 131.5 33.4428 131.5 60.5Z" stroke="white"/>
<path d="M60.1836 63.2305L63.4062 50.9375H67.0391L61.8711 68H58.5195L53.3633 50.9375H56.9961L60.1836 63.2305ZM68.6211 61.543C68.6211 60.6211 68.7539 59.7695 69.0195 58.9883C69.2852 58.1992 69.6719 57.5156 70.1797 56.9375C70.6953 56.3594 71.3203 55.9062 72.0547 55.5781C72.7969 55.25 73.6445 55.0859 74.5977 55.0859C75.5508 55.0859 76.3984 55.25 77.1406 55.5781C77.8828 55.9062 78.5078 56.3594 79.0156 56.9375C79.5312 57.5156 79.9219 58.1992 80.1875 58.9883C80.4531 59.7695 80.5859 60.6211 80.5859 61.543V61.7891C80.5859 62.7188 80.4531 63.5781 80.1875 64.3672C79.9219 65.1484 79.5352 65.8281 79.0273 66.4062C78.5195 66.9844 77.8945 67.4375 77.1523 67.7656C76.4102 68.0859 75.5664 68.2461 74.6211 68.2461C73.668 68.2461 72.8164 68.0859 72.0664 67.7656C71.3242 67.4375 70.6953 66.9844 70.1797 66.4062C69.6719 65.8281 69.2852 65.1484 69.0195 64.3672C68.7539 63.5781 68.6211 62.7188 68.6211 61.7891V61.543ZM71.8789 61.7891C71.8789 62.3203 71.9297 62.8203 72.0312 63.2891C72.1328 63.75 72.293 64.1562 72.5117 64.5078C72.7305 64.8516 73.0117 65.125 73.3555 65.3281C73.707 65.5312 74.1289 65.6328 74.6211 65.6328C75.0977 65.6328 75.5078 65.5312 75.8516 65.3281C76.1953 65.125 76.4727 64.8516 76.6836 64.5078C76.9023 64.1562 77.0625 63.75 77.1641 63.2891C77.2656 62.8203 77.3164 62.3203 77.3164 61.7891V61.543C77.3164 61.0273 77.2656 60.5391 77.1641 60.0781C77.0625 59.6172 76.9023 59.2109 76.6836 58.8594C76.4727 58.5078 76.1953 58.2305 75.8516 58.0273C75.5078 57.8242 75.0898 57.7227 74.5977 57.7227C74.1133 57.7227 73.6992 57.8242 73.3555 58.0273C73.0117 58.2305 72.7305 58.5078 72.5117 58.8594C72.293 59.2109 72.1328 59.6172 72.0312 60.0781C71.9297 60.5391 71.8789 61.0273 71.8789 61.543V61.7891ZM84.3477 55.3203H91.25V65.3516H94.6836V68H84.3477V65.3516H87.957V57.9805H84.3477V55.3203ZM87.7227 52.0742C87.7227 51.8242 87.7656 51.5938 87.8516 51.3828C87.9453 51.1641 88.0742 50.9805 88.2383 50.832C88.4023 50.6758 88.5977 50.5547 88.8242 50.4688C89.0586 50.3828 89.3164 50.3398 89.5977 50.3398C90.1758 50.3398 90.6328 50.5039 90.9688 50.832C91.3125 51.1523 91.4844 51.5664 91.4844 52.0742C91.4844 52.582 91.3125 53 90.9688 53.3281C90.6328 53.6484 90.1758 53.8086 89.5977 53.8086C89.3164 53.8086 89.0586 53.7656 88.8242 53.6797C88.5977 53.5938 88.4023 53.4766 88.2383 53.3281C88.0742 53.1719 87.9453 52.9883 87.8516 52.7773C87.7656 52.5586 87.7227 52.3242 87.7227 52.0742ZM107 55.0859C107.492 55.0859 107.945 55.1211 108.359 55.1914C108.781 55.2539 109.121 55.3242 109.379 55.4023L108.898 58.6484C108.469 58.5469 108.027 58.4727 107.574 58.4258C107.129 58.3711 106.703 58.3438 106.297 58.3438C105.383 58.3438 104.648 58.5195 104.094 58.8711C103.547 59.2227 103.137 59.7266 102.863 60.3828V68H99.6055V55.3203H102.641L102.793 57.3945C103.309 56.6758 103.926 56.1133 104.645 55.707C105.363 55.293 106.148 55.0859 107 55.0859Z" fill="white"/>
</svg>

 </p>
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
      <p className="DecouvrirT"> <svg width="154" height="134" viewBox="0 0 154 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.5 60.5C131.5 87.5572 109.343 109.5 82 109.5C54.6572 109.5 32.5 87.5572 32.5 60.5C32.5 33.4428 54.6572 11.5 82 11.5C109.343 11.5 131.5 33.4428 131.5 60.5Z" stroke="white"/>
<path d="M60.1836 63.2305L63.4062 50.9375H67.0391L61.8711 68H58.5195L53.3633 50.9375H56.9961L60.1836 63.2305ZM68.6211 61.543C68.6211 60.6211 68.7539 59.7695 69.0195 58.9883C69.2852 58.1992 69.6719 57.5156 70.1797 56.9375C70.6953 56.3594 71.3203 55.9062 72.0547 55.5781C72.7969 55.25 73.6445 55.0859 74.5977 55.0859C75.5508 55.0859 76.3984 55.25 77.1406 55.5781C77.8828 55.9062 78.5078 56.3594 79.0156 56.9375C79.5312 57.5156 79.9219 58.1992 80.1875 58.9883C80.4531 59.7695 80.5859 60.6211 80.5859 61.543V61.7891C80.5859 62.7188 80.4531 63.5781 80.1875 64.3672C79.9219 65.1484 79.5352 65.8281 79.0273 66.4062C78.5195 66.9844 77.8945 67.4375 77.1523 67.7656C76.4102 68.0859 75.5664 68.2461 74.6211 68.2461C73.668 68.2461 72.8164 68.0859 72.0664 67.7656C71.3242 67.4375 70.6953 66.9844 70.1797 66.4062C69.6719 65.8281 69.2852 65.1484 69.0195 64.3672C68.7539 63.5781 68.6211 62.7188 68.6211 61.7891V61.543ZM71.8789 61.7891C71.8789 62.3203 71.9297 62.8203 72.0312 63.2891C72.1328 63.75 72.293 64.1562 72.5117 64.5078C72.7305 64.8516 73.0117 65.125 73.3555 65.3281C73.707 65.5312 74.1289 65.6328 74.6211 65.6328C75.0977 65.6328 75.5078 65.5312 75.8516 65.3281C76.1953 65.125 76.4727 64.8516 76.6836 64.5078C76.9023 64.1562 77.0625 63.75 77.1641 63.2891C77.2656 62.8203 77.3164 62.3203 77.3164 61.7891V61.543C77.3164 61.0273 77.2656 60.5391 77.1641 60.0781C77.0625 59.6172 76.9023 59.2109 76.6836 58.8594C76.4727 58.5078 76.1953 58.2305 75.8516 58.0273C75.5078 57.8242 75.0898 57.7227 74.5977 57.7227C74.1133 57.7227 73.6992 57.8242 73.3555 58.0273C73.0117 58.2305 72.7305 58.5078 72.5117 58.8594C72.293 59.2109 72.1328 59.6172 72.0312 60.0781C71.9297 60.5391 71.8789 61.0273 71.8789 61.543V61.7891ZM84.3477 55.3203H91.25V65.3516H94.6836V68H84.3477V65.3516H87.957V57.9805H84.3477V55.3203ZM87.7227 52.0742C87.7227 51.8242 87.7656 51.5938 87.8516 51.3828C87.9453 51.1641 88.0742 50.9805 88.2383 50.832C88.4023 50.6758 88.5977 50.5547 88.8242 50.4688C89.0586 50.3828 89.3164 50.3398 89.5977 50.3398C90.1758 50.3398 90.6328 50.5039 90.9688 50.832C91.3125 51.1523 91.4844 51.5664 91.4844 52.0742C91.4844 52.582 91.3125 53 90.9688 53.3281C90.6328 53.6484 90.1758 53.8086 89.5977 53.8086C89.3164 53.8086 89.0586 53.7656 88.8242 53.6797C88.5977 53.5938 88.4023 53.4766 88.2383 53.3281C88.0742 53.1719 87.9453 52.9883 87.8516 52.7773C87.7656 52.5586 87.7227 52.3242 87.7227 52.0742ZM107 55.0859C107.492 55.0859 107.945 55.1211 108.359 55.1914C108.781 55.2539 109.121 55.3242 109.379 55.4023L108.898 58.6484C108.469 58.5469 108.027 58.4727 107.574 58.4258C107.129 58.3711 106.703 58.3438 106.297 58.3438C105.383 58.3438 104.648 58.5195 104.094 58.8711C103.547 59.2227 103.137 59.7266 102.863 60.3828V68H99.6055V55.3203H102.641L102.793 57.3945C103.309 56.6758 103.926 56.1133 104.645 55.707C105.363 55.293 106.148 55.0859 107 55.0859Z" fill="white"/>
</svg> </p>
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





  </Layout>
)

export default IndexPage
