import './App.css'

import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import AboutUs from './AboutUs'

import { useState } from 'react'

/* Nota: Hacer que sea adaptativo respecto al dispositivo en el que se entre */

export default function App() {
  const [tab, setTab] = useState('Home');

  return (
    <>
      {/* Logo (NO TOCAR) */}
      <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5vh 4vw', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, gap: '2vw'}}>
        <div style = {{ display: 'flex', alignItems: 'center'}}> 
          <h1 style = {{ color: 'gray', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', display: 'inline', margin: 0}}>poli</h1>
          <h1 style = {{ color: '#fc6f03', display: 'inline', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', margin: 0 }}>[ERP]</h1>

        </div> 
      
      {/* Botones del header (NO TOCAR) */}
        <div style = {{display: 'flex', gap: '2vw', flexWrap: 'wrap'}}>

          <button className="especial" onClick = {() => setTab('Home')}> Home </button> 
          <button className="especial" onClick = {() => setTab('Services')}> Services </button> 
          <button className="especial" onClick = {() => setTab('Products')}> Products </button> 
          <button className="especial" onClick={() => setTab('About')}> About Us </button> 

          <button className="especial2" onClick = {() => setTab('Contact')}> Contact Us </button>
        </div> 
      </div>

      {/* Barra horizontal */}
      <hr />     
      {/* Pestañas */}
      <div style = {{ display: 'flex', height: 'clamp(40vh, 80vh, 80vh)', width: 'clamp(40vw, 96vw, 96vw)',  marginTop: '15vh'}}>
        {tab === 'About' && <AboutUs /> }
        {tab === 'Contact' && <Contact /> } 
        {tab === 'Services' && <Services /> }
        {tab === 'Home' && <Home /> }
        {tab === 'Products' && <Products /> }
      </div> 
    </>
  )
}
