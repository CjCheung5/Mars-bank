import { Card } from "react-bootstrap";
import React, {useContext, useState} from 'react';
import './Login.css';
import Usercontext from './Context';
import Navbarr from "./Navbar";

function Login(){
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = useContext(Usercontext);

  function validate(field, label){
    if(!field){
      setStatus('error : ' + label);
      setTimeout(()=>setStatus(''),3000);
      return false;
    }
    else{
      return true;
    }
  }
  
  //fix the foreach loop
  function dbCheck(nam, pw){
    const users = ctx.users;
    const result = users.forEach(user=>{
        if(user.username !== nam){
          setStatus('You dont have the account in our database');
          console.log("wrong name")
          return false
        } else if(user.userpassword !== pw){
              setStatus('Wrong password');
              console.log("wrong password")
              return false
        }
        else{
          ctx.current = user;
          console.log("true");
          return true;
        }
      });  
      return result;
  }

  //set current login user context
  //check user to db
  function handleLogin(){
    if (!validate(name, 'name')) return;
    if (!validate(password, 'password')) return;
    if (!dbCheck(name, password)) return;
    console.log(ctx.current);
    setShow(false);

  }

  return (
    <>
    <Navbarr />
    <h1>Login</h1>
    <Card bg={'primary'} style={{width: "18rem"}}>
      <Card.Title>Account Login</Card.Title>
      <Card.Body>
        {show? 
        <div>
          <form>
            <p>Username</p>
            <input type="input" className="form-control" placeholder="Please enter your username" value={name} onChange={e=> setName(e.currentTarget.value)}></input>
            <p>Password</p>
            <input type="input" className="form-control" placeholder="Pleases enter your password" value={password} onChange={e=> setPassword(e.currentTarget.value)}></input>
            <button type="submit" className="btn btn-light btn-submit" onClick={handleLogin}>Register</button>
          </form>
          <div className="createStatus">{status}</div>
        </div>
        :
        <div>
          <h5>You have just login</h5>
          </div>
        }
      </Card.Body>

    </Card>
    </>
    
  )  
}

export default Login;