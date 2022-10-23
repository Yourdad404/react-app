import React from 'react'
import './about.css'
import {FaReact} from 'react-icons/fa'
import {TiWeatherCloudy} from 'react-icons/ti'
import {ImBlogger} from 'react-icons/im'
const about = () => {
  return (
   <section id='about'>
    <h2>Projects</h2>
    <div className="container about_container row ">
       <div className="about_cards">
        <article className='about_cards1 about_card'>
         <FaReact className='about_icon ' />
          <h5>React Portfolio Website</h5>
          <small>I created this website using react</small>
        </article>
        <article className='about_cards2 about_card '>
         <TiWeatherCloudy className='about_icon'/>
          <h5>Weather App</h5>
          <small>This was my first project which i worked on while i was learning NodeJs and ExpressJs</small>
        </article>
        <article className='about_cards3 about_card '>
         <ImBlogger className='about_icon'/>
          <h5>Blogging Website</h5>
          <small>I created this website using Html,Css,Java Script,NodeJs,ExpressJs to write blogs on internet</small>
        </article>
        </div>
        <div className='about_content'>
        
        </div>
    </div>
   </section>


  )
}

export default about