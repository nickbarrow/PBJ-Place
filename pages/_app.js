import React from 'react'
import '../styles/globals.scss'
import initAuth from '../utils/initAuth'

initAuth()

const MyApp = ({ Component, pageProps }) => (
  <main>
    <Component {...pageProps} />
  </main>
)

export default MyApp
