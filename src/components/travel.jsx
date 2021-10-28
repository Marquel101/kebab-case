import React from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { useState } from 'react'


const Travel = ({boom}) => {
  const categoryData = []
  const opinionData = []
   boom.map((test) => {
    if (test.fields.category === "travel") {
    categoryData.push(test.fields.category)
    opinionData.push(test.fields.opinion) 
    }
    return null
  }) 

  const [current, setCurrent] = useState(0)
    const length = opinionData.length

    const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
    } 

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    } 

    if(!Array.isArray(opinionData) || opinionData.length <= 0 ) {
        return null
    }

  return (
    <section className="slider">
  
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        
        {opinionData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide-active' : 'slide'} key ={index}>
              {index === current && (<h4>{slide}</h4>)}      
            </div>
            )
        })}
    </section>
  )
}

export default Travel