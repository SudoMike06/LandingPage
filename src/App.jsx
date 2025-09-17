import './App.css'
import Login from './Login'
import { useState } from 'react'

/* Nota: Hacer que sea adaptativo respecto al dispositivo en el que se entre */

function Home(){
  return(
    <>
      <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
        <div style = {{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', alignItems: 'center', rowGap: '10px', columnGap: '20px', justifyItems: 'center'}}> 
          <div style = {{ gridColumn: '1 / 3', gridRow: '1 / 3', width: 'clamp(70px, 13vw, 250px)', height: 'clamp(70px, 15vh, 250px)', border: "2px solid white", padding: '30px', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
            <p style = {{ whiteSpace: 'normal', overflowWrap: 'break-word',fontFamily: 'Comic Sans MS', fontSize: 'clamp(18px, 0.5vw + 0.5vh, 24px)', textAlign: 'center', margin: 0, color: '#BBBAC6'}}> <strong> Una herramienta que te permita aumentar tu productividad? </strong> </p>
          </div>

          <div style = {{ gridColumn: '2 / 4', gridRow: '1 / 3', width: 'clamp(40px, 13vw, 250px)', height: 'clamp(70px, 15vh, 250px)', border: "2px solid white", padding: '30px', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style = {{ whiteSpace: 'normal', overflowWrap: 'break-word', fontFamily: 'Comic Sans MS', fontSize: 'clamp(17px, 0.5vw + 0.5vh, 24px)', textAlign: 'center', margin: 0, color: '#BBBAC6'}}> <strong> Un Software que le proporcione organización en todos los ámbitos a tu empresa? </strong> </p>
          </div>

          <div style = {{ gridColumn: '1 / 4', gridRow: 2, zIndex: 1, width: 'clamp(70px, 13vw, 250px)', display: 'flex', padding: '20px',justifyContent: 'center', alignItems: 'center', height: 'clamp(5px, 5vh, 150px)', border: "2px solid white", borderRadius: '40px', backgroundColor: '#fc6f03'}}>
            <p style = {{ whiteSpace: 'normal', overflowWrap: 'break-word', textAlign: 'center', margin: 0, fontFamily: 'Comic Sans MS', fontSize: 'clamp(25px, 0.5vw + 0.5vh, 2vh)', color: 'black'}}> <strong> poli[ERP] </strong> </p>
          </div>

          <div style = {{ gridColumn: 2, gridRow: '2 / 4', width: 'clamp(70px, 13vw, 250px)', height: 'clamp(70px, 15vh, 250px)',border: "2px solid white", paddingTop: '20px', padding: '30px', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style = {{ whiteSpace: 'normal', overflowWrap: 'break-word', fontFamily: 'Comic Sans MS', textAlign: 'center', margin: 0, fontSize: 'clamp(18px, 0.5vw + 0.5vh, 2vh)', color: '#BBBAC6'}}> <strong> Un instrumento de ganancias para tu empresa? </strong> </p>
          </div>

        </div>
        
        <div style = {{ width: 'clamp(5vw, 30vw, 80vw)', height: 'clamp(5vh, 70vh, 80vh)', border: "2px solid white", display: 'flex', padding: '20px', justifyContent: 'center', alignItems: 'center', borderRadius: '40px'}}>
          <iframe src = 'https://www.youtube.com/embed/eVoRmpDjB-M' allowFullScreen width = 'clamp(10vw, 30vw, 40vw)' height = 'clamp(10vh, 30vh, 40vh)'> </iframe>
        </div>
      </div>
    </>

  ); 
}

function Services(){
  return(
    <>
    
      <div style = {{display: 'grid', width: 'clamp(10vw, 70vw, 90vw)', height: 'clamp(10vh, 75vh, 90vh)', marginLeft: '12.5vw', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', justifyItems: 'center', alignItems: 'center'}}>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 1, gridRow: 1, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Gestión de Compras </strong> </div>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 1, gridRow: 2, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Gestión de Inventario </strong> </div>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 2, gridRow: 1, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Gestión de Ventas </strong> </div>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 2, gridRow: 2, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Gestión de Proyectos </strong> </div>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 3, gridRow: 1, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Contacto con Proveedores </strong> </div>
        <div style = {{ boxShadow: '3px 5px 10px rgba(255,255,255,1.0)', gridColumn: 3, gridRow: 2, display: 'flex', justifyContent: 'center', width: 'clamp(10vw, 20vw, 30vw)', height: 'clamp(10vh, 30vh, 30vh)', border: '2px solid white'}}> <strong> Atención al Cliente </strong> </div>
      </div>


    </>
  );
}

function Contact(){
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Email:", email);
    console.log("Message:", message);
    alert(`Enviado Correctamente`);
  }

  return(
    <>
      <div style = {{ marginLeft: '21.5vw', alignItems: 'center', height: 'clamp(10vh, 80vh, 90vh)', width: 'clamp(10vw, 45vw, 90vw)'}}> 
        <form style = {{ height: 'clamp(10vh, 70vh, 80vh)', width: 'clamp(10vw, 45vw, 90vw)', display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)'}} onSubmit={handleSubmit}>
          
          <h2 style = {{ gridColumn: '1 / 3', gridRow: 1, fontSize: 'clamp(10px, 4vw + 4vh, 60px)', fontFamily: 'Comic Sans MS'}}> <span style = {{ color: 'gray'}}> Contact </span> <span style = {{ color: '#fc6f03'}}> Us! </span> </h2>
         
          <div style = {{ gridColumn: 1, gridRow: 2}}>
              <input style = {{ fontSize: 'clamp(10px, 3vw + 3vh, 25px)', fontFamily: 'Comic Sans MS', width: 'clamp(5vw, 17vw, 20vw)', height: 'clamp(2vh, 5vh, 20vh)'}} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name:" required />
          </div>
          
          <div style = {{ gridColumn: 2, gridRow: 2,}}>
              <input style = {{ fontSize: 'clamp(10px, 3vw + 3vh, 25px)', fontFamily: 'Comic Sans MS', width: 'clamp(5vw, 17vw, 20vw)', height: 'clamp(2vh, 5vh, 20vh)'}} type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number:" required />
          </div>
          
          <div style = {{ gridColumn: 1, gridRow: 3}}>
              <input style = {{ fontSize: 'clamp(10px, 3vw + 3vh, 25px)', fontFamily: 'Comic Sans MS', width: 'clamp(5vw, 17vw, 20vw)', height: 'clamp(2vh, 5vh, 20vh)'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email:" required />
          </div>
          
          <div style = {{ gridColumn: 2, gridRow: 3}}>
              <textarea style = {{ fontSize: 'clamp(10px, 3vw + 3vh, 25px)', fontFamily: 'Comic Sans MS', width: 'clamp(5vw, 20vw, 50vw)', height: 'clamp(5vh, 10vh, 50vh)'}} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message:" required />
          </div>
          
          <div style = {{ width: 'clamp(30vw, 50vw, 60vw)', height: 'clamp(1vh, 10vh, 20vh)', display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: '1 / 3', gridRow: 4}}> <button style = {{ display: 'flex', justifyContent: 'center', fontFamily: 'Comic Sans MS', boxShadow: "2px 0px 12px rgba(252, 111, 3, 1)", fontSize: 'clamp(1px, 1vw + 1vh, 20px)', color: 'black', backgroundColor: '#fc6f03', width: 'clamp(1vw, 7vw, 10vw)', height: 'clamp(1vh, 6vh, 7vh)'}} type="submit"> <strong> Submit </strong> </button> </div>
        </form>

      </div>
    </>
  );
}

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
        {tab === 'Products' && <p> Future Products </p>}
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
