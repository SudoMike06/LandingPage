import './AboutUs.css'


function AboutUs(){
  return(
    <>
      <div className='separacion'> 
        <div className='sections' style = {{ height: 'clamp(1vh, 30vh, 30vh)', gridRow: 1, gridColumn: 1}}> 
          <h2 className='titulo'> Members </h2> 
          <span> <strong> Miquel Simeon Lopez \ </strong> </span>
          <strong> Daniel Villena Lillo </strong> <br />
          <span> <strong> Bohdan Zakharov \ </strong> </span>
          <strong> Tomás Otero </strong> <br /> 
          <strong> Nigger </strong> 
        </div>

        <div className='sections' style = {{ gridRow: 2, gridColumn: 1}}>
          <h2 className='titulo'> Contacts </h2>
          <strong> Number: +34 727818929 </strong> <br />
          <strong> Email: polierp@gmail.com </strong>
        </div>

        <div className='sections' style = {{ gridRow: 3, gridColumn: 1}}>
          <h2 className='titulo'> Our main office </h2>
          <strong> StartInf Office, ETSINF UPV, Valencia </strong>
        </div>

        <div style = {{ gridRow: '1 / 3', gridColumn: 2}}>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.4195010685135!2d-0.3494199234797223!3d39.48244111197198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604883326cd6c7%3A0xded925519ef13eaf!2sUPV%20-%20ETS%20Enginyeria%20Inform%C3%A0tica%20(ETSINF)!5e0!3m2!1sen!2ses!4v1758529417034!5m2!1sen!2ses"  loading="lazy" allowFullScreen />
        </div>
      </div>
    </>
  );

}

export default AboutUs;
