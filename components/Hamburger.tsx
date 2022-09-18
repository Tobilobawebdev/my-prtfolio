import React, { useEffect, useRef } from 'react'
import { staggerRevealClose } from '../utils/animation'
import { Props } from './Header'

interface Prop  {
    state: Props
}

const Hamburger = ({ state }: Prop) => {
    //creating variables of our dom nodes
    let menuLayer = useRef()
    let reveal1 = useRef()
    let reveal2 = useRef()
    let cityBackground = useRef()
    let line1 = useRef()
    let line2 = useRef()
    let line3 = useRef()
    let info = useRef()

    useEffect(() => {
    if (state.clicked) {
    }
    
    }, [])
    
  return (
    <div></div>
  )
}

export default Hamburger