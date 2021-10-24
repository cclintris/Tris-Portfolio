import React from 'react'
import avatar from '../assets/img/avatar.jpg'
import { StyledNavigator } from './styles'
import { NavLink } from 'react-router-dom'
import { routes } from '../routes'

const Navigator = () => {
  return (
    <StyledNavigator>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        {routes.map(({ name, route }, key) => (
          <li className="nav-item" key={key}>
            <NavLink to={route} activeClassName="active-class">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <p>@2021 Tristan's personal website</p>
      </footer>
    </StyledNavigator>
  )
}

export default Navigator
