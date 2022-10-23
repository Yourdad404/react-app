import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills'>
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Developer</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>HTML</h4>
                    <small class='text-light'>Experienced</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>CSS</h4>
                    <small class='text-light'>Intermediate</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>Java Script</h4>
                    <small class='text-light'>Intermediate</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>Bootstrap</h4>
                    <small class='text-light'>Intermediate</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>React</h4>
                    <small class='text-light'>Experienced</small>
                    </article>
                </div>
            </div>

            <div className='experience_backend'>
            <h3>Backend Developer</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>NodeJs</h4>
                    <small class='text-light'>Experienced</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>ExpressJs</h4>
                    <small class='text-light'>Beginner</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>MongoDb</h4>
                    <small class='text-light'>Beginner</small>
                    </article>
                    <article className='experience_details'>
                    <BsFillPatchCheckFill/>
                    <h4>My Sql</h4>
                    <small class='text-light'>Beginner</small>
                    </article>
                    
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills