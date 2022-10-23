import React from 'react'
import './me.css'
import Typical from 'react-typical'
const me = () => {
  return (
      <section id='me'>
        <h2>Final Year B. Tech (Electronics and Instrumentation) student
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={
                [
                ' with analytical skills',
                1000,
                ' with problem-solving skills',
                
                1000,
                ' Capable of working in team',
                1000,
                ' and alone as well.',
                1000
                ]
            } />
             </h2>

      </section>
  )
}

export default me