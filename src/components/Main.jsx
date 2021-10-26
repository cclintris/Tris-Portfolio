import React from 'react'
import { StyledMainContent } from './styles'
import { Route, Switch } from 'react-router'
import { get_Route_JSX_According_to_Path } from '../utils'
import { routes } from '../routes'

const Main = () => {
  return (
    <StyledMainContent>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      <Switch>
        {routes.map(({ path }, key) => (
          <Route path={path} key={key} exact>
            {get_Route_JSX_According_to_Path(path)}
          </Route>
        ))}
      </Switch>
    </StyledMainContent>
  )
}

export default Main
