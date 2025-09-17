import { useState } from "react";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Has escrito: \nEmail: ${email}\nPassword: ${password}`);
  }

  return(
    <>
      <div style = {{ maxWidth: '400px', margin: 'auto', padding: '2rem'}}> 
        <h2> Login </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label> Email: </label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div style = {{marginTop: '1rem'}}> 
            <label> Password: </label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button style = {{ marginTop: '1rem'}} type="submit"> Login </button>
        </form>
      </div>
    </>
  );
}

export default Login;
