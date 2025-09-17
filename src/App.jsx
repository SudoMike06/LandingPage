import './App.css'

import Login from './Login'

import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'

import { useState } from 'react'

/* Nota: Hacer que sea adaptativo respecto al dispositivo en el que se entre */

export default function App() {
  const [tab, setTab] = useState('Home');
//const [popupAbierto, setPopupAbierto] = useState(true);

  return (
    <>
      {/* Logo (NO TOCAR) */}
      <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7vh 5vw', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, gap: '2vw'}}>
        <div style = {{ display: 'flex', alignItems: 'center'}}> 
          <h1 style = {{ color: 'gray', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', display: 'inline', margin: 0}}>poli</h1>
          <h1 style = {{ color: '#fc6f03', display: 'inline', fontSize: 'clamp(18px, 1.5vw + 1.5vh, 40px)', margin: 0 }}>[ERP]</h1>

        </div> 
      
      {/* Botones del header (NO TOCAR) */}
        <div style = {{display: 'flex', gap: '2vw', flexwrap: 'wrap'}}>
          <button style = {{ backgroundColor: '#3A4E70', color: '#BBBAC6', fontSize: 'clamp(14px, 1vw + 1vh, 20px)', boxShadow: "0 2px 5px rgba(0,0,0,0.3)", outline: 'none', transition: 'all 0.1s ease'}} 
            onMouseDown={e => (e.target.style.transform = "translateY(2px)")}
            onMouseUp={e => (e.target.style.transform = "translateY(0)")} onClick = {() => setTab('Home')}> Home </button> 

          <button style = {{ backgroundColor: '#3A4E70', color: '#BBBAC6', fontSize: 'clamp(14px, 1vw + 1vh, 20px)', boxShadow: "0 2px 5px rgba(0,0,0,0.3)", outline: 'none', transition: 'all 0.1s ease'}} 
            onMouseDown={e => (e.target.style.transform = "translateY(2px)")}
            onMouseUp={e => (e.target.style.transform = "translateY(0)")} onClick = {() => setTab('Services')}> Services </button> 

          <button style = {{ backgroundColor: '#3A4E70', color: '#BBBAC6', fontSize: 'clamp(14px, 1vw + 1vh, 20px)', boxShadow: "0 2px 5px rgba(0,0,0,0.3)", outline: 'none', transition: 'all 0.1s ease'}} 
            onMouseDown={e => (e.target.style.transform = "translateY(2px)")}
            onMouseUp={e => (e.target.style.transform = "translateY(0)")} onClick = {() => setTab('Products')}> Products </button> 

          <button style = {{ backgroundColor: '#3A4E70', color: '#BBBAC6' , fontSize: 'clamp(14px, 1vw + 1vh, 20px)', boxShadow: "0 2px 5px rgba(0,0,0,0.3)", outline: 'none', transition: 'all 0.1s ease'}} 
            onMouseDown={e => (e.target.style.transform = "translateY(2px)")}
            onMouseUp={e => (e.target.style.transform = "translateY(0)")}onClick={() => setTab('About')}> About Us </button> 

          <button style = {{ backgroundColor: '#fc6f03', color: 'black', fontSize: 'clamp(14px, 1vw + 1vh, 20px)', boxShadow: "0 2px 5px rgba(0,0,0,0.3)", outline: 'none', transition: 'all 0.1s ease'}} 
            onMouseDown={e => (e.target.style.transform = "translateY(2px)")}
            onMouseUp={e => (e.target.style.transform = "translateY(0)")} onClick = {() => setTab('Contact')}> Contact Us </button>

        </div>
      </div>

      {/* Barra horizontal (NO TOCAR)*/}
      <hr style = {{ position: 'fixed', width: '100vw', left: 0, top: '13vh', border: "2px solid #BBBAC6", boxShadow: "0 2px 5px rgba(187, 186, 198)"}} />

      {/* Pestañas */}
      <div style = {{ display: 'flex', height: 'clamp(40vh, 80vh, 80vh)', width: 'clamp(40vw, 96vw, 96vw)',  marginTop: '15vh'}}>
        {tab === 'About' && <p style = {{ color: '#BBBAC6', fontSize: '18px'}}> Information about our team </p> }
        {tab === 'Contact' && <Contact /> } 
        {tab === 'Services' && <Services /> }
        {tab === 'Home' && <Home /> }
        {tab === 'Products' && <Products /> }
      </div>
      
     {/* Popup */}
     {/*<div style = {{ position: 'absolute', left: '200px', top: '160px'}}> <div onClick={() => setPopupAbierto(!popupAbierto)} style = {{ position: 'fixed', bottom: popupAbierto ? '200px' : '60px', left: '450px', transform: 'translateX(-50%)', width: '20px', color: 'white', cursor: 'pointer', boxShadow: "0 4px 9px rgba(0,0,0,0.3)", zIndex: 1000, transition: 'bottom 0.3s'}}> ^ </div> 
        {popupAbierto === true && (<div style = {{ position: "fixed", bottom: "0px", left: '380px', width: "100px", height: "50px", bottom: '100px', backgroundColor: "white", color: "black", padding: "20px", borderRadius: '50px', boxShadow: "0 -4px 10px rgba(0,0,0,0.3)", zIndex: 999, transform: 'translateY(-11.2%)', transition: 'bottom 0.6s ease, transform 0.6s ease'}}> 
          <p> hola guapos </p>
        </div>)} 
      </div> */}
    </>
  )
}
