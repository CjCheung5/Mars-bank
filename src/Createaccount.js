import React, { useState } from 'react';
import Usercontext from './Context';
import { Card, OverlayTrigger, Popover } from 'react-bootstrap';
import "./Createaccount.css";
import Navbarr from './Navbar';

function CreateAccount(){
  const ctx = React.useContext(Usercontext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function updateCurrent(){
    //ctx.current = [];
    ctx.current = {username: name, useremail: email, userpassword: password, userbalance: 100};
    console.log("renewed current");
  }

  function handleCreate(){
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({username: name, useremail: email, userpassword: password, userbalance: 100});
    updateCurrent();
    setShow(false);
    console.log(name,email,password);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>
        <Navbarr />
       <Card bg={"primary"} style={{ width: '18rem' }} className = "createAccount">
         <Card.Title>Create Account</Card.Title>
         <Card.Body>
           {show ? (
             <>
             Name<br/>
             <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
             Email address<br/>
             <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
             Password<br/>
             <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
             <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
             <div id="createStatus">{status}</div>
             </>
           ):(
             <>
             <h5>Success</h5>
             <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              {alert("Succesfully Created Account")}
             </>
           )}
         </Card.Body>
       </Card>
    </>
  )
}

export default CreateAccount;

