import React from 'react';
import { Card, Nav } from "react-bootstrap";
import Usercontext from "./Context";
import Navbarr from './Navbar';

function Balance(){
  const ctx = React.useContext(Usercontext);
  return (
    <>
    <Navbarr />
    <h1>Balance</h1>
    <Card>
    <Card.Body>
      <Card.Title>Balance</Card.Title>
      <Card.Text>Your Balance is {ctx.current.userbalance}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Balance;