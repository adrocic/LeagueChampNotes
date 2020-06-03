import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        font-family: 'Roboto', sans-serif;
      }

      html {
        font-size: 16px;
      }
    `}
  />
)

export default GlobalStyles
