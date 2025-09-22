import './Home.css'

function Home(){
  return(
    <>
      <div style = {{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style = {{ height: 'clamp(10vh, 60vh, 60vh)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>  

          <button className='poliERP' >
            <p className='texto' > <strong> poli[ERP] </strong> </p>
          </button>

        </div>

        <div className="beneficios" >
          
          <div className="beneficio-card">
            <h3>Organización</h3>
            <p>Mantén toda la información de tu empresa en un solo lugar y accesible desde cualquier dispositivo.</p>
          </div>

          <div className="beneficio-card">
            <h3>Productividad</h3>
            <p>Automatiza tareas repetitivas y ahorra tiempo a tu equipo.</p>
          </div>

          <div className="beneficio-card">
            <h3>Ganancias</h3>
            <p>Optimiza procesos para aumentar ingresos y reducir errores.</p>
          </div>

        </div> 
      </div>

    </>

  ); 
}

export default Home;
