import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Propic } from './components/propic/Propic'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'

export default function App() {

  return (
    <div className="app">
      <Propic />
      <Content />
      <Footer />
    </div>
  )
}
