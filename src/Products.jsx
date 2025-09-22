import './Products.css'
function Products(){

  return(
    <>
      
      <div style = {{ display: 'grid', justifyItems: 'center', gridTemplateRows: '0.5fr 2.5fr', marginTop: '2vh', marginLeft: '12.5vw', width: 'clamp(10vw, 70vw, 80vw)', height: 'clamp(10vh, 75vh, 80vh)'}}> 
        <div style = {{ display: 'flex', justifyContent: 'center', fontFamily: 'Comic Sans MS', fontSize: 'clamp(10px, 2vh + 2vw, 80px)',  height: 'clamp(5vh, 14vh, 15vh)', width: 'clamp(5vw, 20vw, 20vw)'}}> Prices </div>
        <div style = {{ display: 'grid', gap: '1.75vw', gridTemplateRows: 'repeat(1, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)', width: 'clamp(10vw, 69vw, 80vw)', height: 'clamp(10vh, 60vh, 65vh)'}}> 
          
          <div className='plan' style = {{ gridColumn: 1,  backgroundColor: 'white', boxShadow: '2px 2px 12px rgba(255,255,255,1)'}}> 
            <p style = {{ color: 'black'}}> Plan básico </p> 
          </div>
          
          <div className='plan' style = {{  gridColumn: 2, backgroundColor: '#757084', boxShadow: '2px 2px 12px rgba(117, 112, 131, 1)'}}> 
            <p> Plan Pro </p> 
          </div>
          
          <div className='plan' style = {{ gridColumn: 3, backgroundColor: '#232537', boxShadow: '2px 2px 12px rgba(35, 37, 55, 1)'}}> 
            <p> Plan Advanced </p>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default Products;
