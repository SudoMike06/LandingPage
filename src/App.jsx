import './App.css'

import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import AboutUs from './AboutUs'


/* Nota: Hacer que sea adaptativo respecto al dispositivo en el que se entre */

export default function App() {

  return (
    <>
      {/* Logo (NO TOCAR) */}
      <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(90px)', padding: '5vh 4vw', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, gap: '2vw'}}>
        <div style = {{ display: 'flex', alignItems: 'center'}}> 
          <h1 style = {{ color: 'gray', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', display: 'inline', margin: 0}}>poli</h1>
          <h1 style = {{ color: '#fc6f03', display: 'inline', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', margin: 0 }}>[ERP]</h1>

        </div> 
      
      {/* Botones del header (NO TOCAR) */}
        <div style = {{display: 'flex', gap: '2vw', flexWrap: 'wrap'}}>

          <button className="especial" onClick = {() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}> Home </button> 
          <button className="especial" onClick = {() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}> Services </button> 
          <button className="especial" onClick = {() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}> Products </button> 
          <button className="especial" onClick = {() => document.getElementById('aboutUs').scrollIntoView({ behavior: 'smooth' })}> About Us </button> 

          <button className="especial2" onClick = {() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> Contact Us </button>
        </div>
        <hr />
      </div>

      {/* Pestañas */}
      <div style = {{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', width: 'clamp(40vw, 96vw, 96vw)',  marginTop: '10vh', gap: '50px'}}>
        <div id="home"> <Home /> </div>
        <div id="services"> <Services /> </div>
        <div id="products"> <Products /> </div>
        <div id="aboutUs"> <AboutUs /> </div>
        <div id="contact"> <Contact /> </div>
      </div>
      
    </>
  )
}
