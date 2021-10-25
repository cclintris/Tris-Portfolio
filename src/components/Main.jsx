import React from 'react'
import { StyledMainContent } from './styles'
import Home from '../pages/Home'

const Main = () => {
  return (
    <StyledMainContent>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      <Home />
    </StyledMainContent>
  )
}

export default Main
