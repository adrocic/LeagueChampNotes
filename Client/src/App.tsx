import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { ReactQueryConfigProvider } from 'react-query'
import GlobalStyles from './GlobalStyles'
import { AuthProvider } from './Services/AuthContext'
import { UserContext } from './Services/UserContext'

import PrivateRoute from './Components/PrivateRoute'
import Home from './Views/Home'

const queryConfig = {
  retry: false,
}

const [user, setUser] = useState()
const providerValue = { user, setUser }

function App() {
  return (
    <Router>
      <ReactQueryConfigProvider config={queryConfig}>
        <GlobalStyles />
        <AuthProvider>
          <UserContext.Provider value={providerValue as any}>
            <ThemeProvider>
              <CSSReset />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Redirect to={'/login'} />}
                />
                <PrivateRoute path="/home" component={Home} />
              </Switch>
            </ThemeProvider>
          </UserContext.Provider>
        </AuthProvider>
      </ReactQueryConfigProvider>
    </Router>
  )
}

export default App
