import './Services.css'

function Services(){
  return(
    <>
    
      <div style = {{ display: 'grid', width: 'clamp(10vw, 70vw, 90vw)', height: 'clamp(10vh, 75vh, 90vh)', marginLeft: '12.5vw', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', justifyItems: 'center', alignItems: 'center'}}>
        <div className='box' style = {{ gridColumn: 1, gridRow: 1}}> <strong> Gestión de Compras </strong> <img className='imagen' src="https://cdn-icons-png.flaticon.com/512/4696/4696832.png" /> </div>
        <div className='box' style = {{ gridColumn: 1, gridRow: 2}}> <strong> Gestión de Inventario </strong>  <img className='imagen' src="https://cdn-icons-png.freepik.com/256/12201/12201509.png?semt=ais_white_label" /> </div>
        <div className='box' style = {{ gridColumn: 2, gridRow: 1}}> <strong> Gestión de Ventas </strong> <img className='imagen' src="https://cdn-icons-png.flaticon.com/512/11325/11325762.png" /> </div>
        <div className='box' style = {{ gridColumn: 2, gridRow: 2}}> <strong> Gestión de Proyectos </strong> <img className='imagen' src="https://cdn-icons-png.flaticon.com/512/4946/4946342.png" /> </div>
        <div className='box' style = {{ gridColumn: 3, gridRow: 1}}> <strong> Contacto con Proveedores </strong> <img className='imagen' src="https://cdn-icons-png.flaticon.com/512/1924/1924612.png" /> </div>
        <div className='box' style = {{ gridColumn: 3, gridRow: 2}}> <strong> Atención al Cliente </strong> <img className='imagen' src="https://cdn-icons-png.flaticon.com/512/8781/8781951.png" /> </div>
      </div>


    </>
  );
}

export default Services;
