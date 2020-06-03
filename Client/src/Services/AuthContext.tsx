import React, { useState, createContext, useContext } from 'react'

import { handleTokenChange } from '../Services/API'

const AuthContext = createContext({})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthProvider = (props: any): JSX.Element => {
  const [token, setToken] = useState(localStorage.getItem('auth_token'))
  const [isInterceptorSet, setIsInterceptorSet] = useState(false)

  React.useEffect(() => {
    // Update axios with the latest token each time it changes
    handleTokenChange(token)
    setIsInterceptorSet(true)
  }, [token])

  function onLogin(newToken: any) {
    localStorage.setItem('auth_token', newToken)
    setToken(newToken)
  }

  function onLogout() {
    localStorage.removeItem('auth_token')
    setToken(null)
  }

  const providerValue = {
    token: isInterceptorSet ? token : null,
    isLoggedIn: token && isInterceptorSet,
    login: onLogin,
    logout: onLogout,
  }

  return <AuthContext.Provider value={providerValue} {...props} />
}

export const useAuth = (): any => useContext(AuthContext)
