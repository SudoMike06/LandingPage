import { useState } from 'react' 
import './Contact.css'
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
              <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name:" required />
          </div>
          
          <div style = {{ gridColumn: 2, gridRow: 2,}}>
              <input className='input' type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number:" required />
          </div>
          
          <div style = {{ gridColumn: 1, gridRow: 3}}>
              <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email:" required />
          </div>
          
          <div style = {{ gridColumn: 2, gridRow: 3}}>
              <textarea className='input' style = {{ height: 'clamp(5vh, 10vh, 50vh)'}} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message:" required />
          </div>
          
          <div style = {{ width: 'clamp(30vw, 50vw, 60vw)', height: 'clamp(1vh, 10vh, 20vh)', display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: '1 / 3', gridRow: 4}}> <button style = {{ display: 'flex', justifyContent: 'center', fontFamily: 'Comic Sans MS', boxShadow: "2px 0px 12px rgba(252, 111, 3, 1)", fontSize: 'clamp(1px, 1vw + 1vh, 20px)', color: 'black', backgroundColor: '#fc6f03', width: 'clamp(1vw, 7vw, 10vw)', height: 'clamp(1vh, 6vh, 7vh)'}} type="submit"> <strong> Submit </strong> </button> </div>
        </form>

      </div>
    </>
  );
}

export default Contact
