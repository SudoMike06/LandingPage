
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

export default Services;
