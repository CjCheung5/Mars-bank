import React from 'react';
import { useState } from "react";
import { Card } from "react-bootstrap";
import Usercontext from "./Context";
import Navbarr from "./Navbar";
import Withdraw from './Withdraw';

function Deposit(){
  const ctx = React.useContext(Usercontext);
  const [deposit, setDeposit] = React.useState(0);
  const [status, setStatus]     = React.useState('');
  const regExp = new RegExp(/^\d*\.?\d*$/);
  
  function validate(number){
    if(!number){
      setStatus("There is error in your number");
      setTimeout(()=>setStatus(""), 3000);
      return false;
    } else if(!regExp.test(number)){
      setStatus("Your input is not a number");
      setTimeout(()=>setStatus(""), 3000);
      return false;
    }
    else if(number = 0){
      setStatus("Number cannot be 0 or smaller");
      setTimeout(()=>setStatus(""), 3000);
      return false;
    }
    else{
      console.log('true deposit');
      return true;
    }
  }
  
  function updateBalance(){
    if(ctx.users.length>0){
      ctx.users.filter( (user)=>{
        if (user.username === ctx.current.username) {
             console.log(isNaN(user.username));
             user.userbalance += deposit;
             console.log(user.userbalance);
             ctx.current = {};
             ctx.current = user;
        }
        else{
          setStatus("Fail to deposit, Please login");
          setTimeout(()=>setStatus(""),3000);
          return false;
        }
      }); 
    }
    else{
      setStatus("Fail to deposit, Please login");
      setTimeout(()=>setStatus(""),3000);
      return false;
    }
  }

  function handleDeposit(){
    if(!validate(deposit))  return;
    console.log('ready to deposit');
    if(!updateBalance()) return;
    console.log('Deposit Completed');
  }
  return (
    <>
    <Navbarr />
    <h1>Deposit</h1>
    <Card>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Balance : {ctx.current.userbalance}</Card.Text>
        <Card.Text>Deposit Amount:</Card.Text>
          <input type="number"  onChange={(e)=>setDeposit(Number(e.currentTarget.value))}></input><br/>
          <button type="submit" className="btn btn-light" onClick={handleDeposit}>Confirm</button>
          <p>{status}</p>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default Deposit;