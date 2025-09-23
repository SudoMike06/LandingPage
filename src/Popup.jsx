import { useState } from "react";

export default function Popup(){
  const [popupAbierto, setPopupAbierto] = useState(true);

  return(
    <>
      <div style = {{ display: 'flex', width: 'clamp(10vw, 30vw, 40vw)', height: 'clamp(5vh, 10vh, 10vh)', border: '2px solid red'}}> <div onClick={() => setPopupAbierto(!popupAbierto)} style = {{ position: 'fixed', bottom: popupAbierto ? '200px' : '60px', left: '450px', transform: 'translateX(-50%)', width: '20px', color: 'white', cursor: 'pointer', boxShadow: "0 4px 9px rgba(0,0,0,0.3)", zIndex: 1000, transition: 'bottom 0.3s'}}> ^ </div> 
        {popupAbierto === true && (<div style = {{ display: 'flex', backgroundColor: "white", color: "black", padding: "20px", borderRadius: '50px', boxShadow: "0 -4px 10px rgba(0,0,0,0.3)", zIndex: 999, transform: 'translateY(-11.2%)', transition: 'bottom 0.6s ease, transform 0.6s ease'}}> 
          <p> hola guapos </p>
        </div>)} 
      </div>
    </>
  )  
}
