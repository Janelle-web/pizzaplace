import React, { useState } from "react"

import Navbar from "../Navbar"
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElement"
import Sidebar from "../Sidebar"

function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Tastiest Pizza Ever</HeroH1>
          <HeroP>Ready in 30 minutes!</HeroP>
          <HeroBtn>Place Order Now!</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
