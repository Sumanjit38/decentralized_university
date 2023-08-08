import React from "react"
//import Heading from "../../common/heading/Heading"
import "./home.css"
import Title from "../common/header/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO DECENTRALIZATION...' title='Best and Secure Examination & Grading System'/>
            
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero