
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

export default Home;
