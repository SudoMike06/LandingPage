import './Services.css'

function Services(){
  return(
    <>
    
      <div style = {{display: 'grid', width: 'clamp(10vw, 70vw, 90vw)', height: 'clamp(10vh, 75vh, 90vh)', marginLeft: '12.5vw', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', justifyItems: 'center', alignItems: 'center'}}>
        <div className='box' style = {{ gridColumn: 1, gridRow: 1}}> <strong> Gestión de Compras </strong> </div>
        <div className='box' style = {{ gridColumn: 1, gridRow: 2}}> <strong> Gestión de Inventario </strong> </div>
        <div className='box' style = {{ gridColumn: 2, gridRow: 1}}> <strong> Gestión de Ventas </strong> </div>
        <div className='box' style = {{ gridColumn: 2, gridRow: 2}}> <strong> Gestión de Proyectos </strong> </div>
        <div className='box' style = {{ gridColumn: 3, gridRow: 1}}> <strong> Contacto con Proveedores </strong> </div>
        <div className='box' style = {{ gridColumn: 3, gridRow: 2}}> <strong> Atención al Cliente </strong> </div>
      </div>


    </>
  );
}

export default Services;
