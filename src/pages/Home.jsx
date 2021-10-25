import React from 'react'
import { StyledHome } from './styles/home'
import Particle from '../components/Particle'

const Home = () => {
  return (
    <StyledHome>
      <div className="bg-particles">
        <Particle />
      </div>
    </StyledHome>
  )
}

export default Home
