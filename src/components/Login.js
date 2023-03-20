import React, { useState } from "react";

import "./Login.css"

const Login = () => {

  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  }

  return (
    <div class="form-box">
      <form action="">
        {!register ?
          <h2>Login</h2> :
          <h2>Register</h2>
        }

        {register ?
          <div class="inputbox">

            <input type="text" required onChange={(e) => setName(e.target.value)}/>
            <label for="">Name</label>
          </div> :
          <div></div>
        }

        <div class="inputbox">

          <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
          <label for="">Email</label>
        </div>
        <div class="inputbox">

          <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
          <label for="">Password</label>
        </div>
        <div class="forget">
          <label for=""><input type="checkbox" />Remember Me</label>
        </div>
        {!register ?
          <button className="btnLogin" onClick={data}>Log in</button> :
          <button className="btnLogin" onClick={data}>Register</button>
        }

        <div class="register">
          {!register ?
            <p>Don't have a account <button className="btnNewAccount" onClick={() => setRegister(true)}>Register</button></p> :
            <p>Already have a account <button className="btnNewAccount" onClick={() => setRegister(false)}>Login</button></p>
          }
        </div>
      </form>
    </div>


  )
}

export default Login