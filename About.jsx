import React from 'react'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'
import './About.css'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tommorrow's Leaders Today</h2>
        <p>"Innovation is the specific instrument of entrepreneurship... the act that endows resources with a new capacity to create wealth."</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare
            aspiring educators to make a meaningful impact in classroom, schools, and communities
        </p>
        <p>Wheather you aspire to become a teacher, administrator, counselor, or educational Leader
            our diverse range of programs offers the perfect pathway to achieve your goal and unlock
            your full potential in sharing the future education
        </p>
      </div>
    </div>
  )
}

export default About