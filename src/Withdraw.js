import React, {useState} from "react";
import { Card } from "react-bootstrap";
import Usercontext from "./Context";
import Navbarr from "./Navbar";

function Withdraw(){
  const [withdraw, setWithdraw] = useState(0);
  const [status, setStatus] = useState("");
  const ctx = React.useContext(Usercontext);
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
      console.log('true withdraw');
      return true;
    }
  }
  
  function updateWithdraw(){
    if(ctx.users.length>0){
      ctx.users.filter((user)=>{
        if(user.username === ctx.current.username){
          user.userbalance -= withdraw;
          console.log(user.userbalance);
          console.log("withdraw sucessfully");
          ctx.current = {};
          ctx.current = user;
          console.log(ctx.current);
        }
        else{
          setStatus("Fail to withdraw Please login");
          setTimeout(()=>setStatus(""),3000);
          return false;
        }
      })
    }
    else{
      setStatus("Fail to withdraw Please login");
      setTimeout(()=>setStatus(""),3000);
      return false;
  }
}

  function handleSubmit(){
    if(!validate(withdraw)) return console.log("fail validating");
    console.log("prepare to withdraw")
    if(!updateWithdraw()) return;
    console.log('Withdraw Completed');

  }

  return (
    <>
    <Navbarr />
    <h1>Withdraw</h1>
    <Card>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Balance: {ctx.current.userbalance}</Card.Text>
        <input type="number" onChange={(e)=> setWithdraw(Number(e.currentTarget.value))}></input><br/>
        <button type="submit" className="btn btn-light" onClick={handleSubmit}>Confirm</button><br/>
        <p>{status}</p>
      </Card.Body>
    </Card>
    </>
  )
}


export default Withdraw;