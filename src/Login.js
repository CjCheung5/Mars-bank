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
    let result = false;
      if(users.length > 0){
        users.filter((user) =>{
          if(user.username === nam){
            if(user.userpassword === pw){
              //ctx.current=[];
              ctx.current = {username : user.username, useremail: user.useremail, userpassword: user.userpassword, userbalance: 100 };
              result = true;
            } else{
              setStatus("please enter the correct password");
              setTimeout(()=>setStatus(''),3000);
            }
          } else{
            setStatus("please create your account");
            setTimeout(()=>setStatus(''),3000);
          }
        })
      } else{
        setStatus("please create your account");
        setTimeout(()=>setStatus(''),3000);
      }
    return result;
  }

  //set current login user context
  //check user to db
  function handleLogin(){
    if (!validate(name, 'name')) return;
    if (!validate(password, 'password')) return;
    if (!dbCheck(name, password)) return console.log('didnt pass the db check');
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
            <button type="submit" className="btn btn-light btn-submit" onClick={handleLogin}>Login</button>
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