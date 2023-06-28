import React from 'react'

import { Header, AboutUs, Menu, Chef, Introduction, Laurel, Gallery, FindUs, Footer } from './containers/index'

import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Introduction />
      <Laurel />
      <Gallery />
      <FindUs />
      <Footer />

    </div>
  )
}

export default App