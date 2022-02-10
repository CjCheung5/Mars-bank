import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CardImg } from 'react-bootstrap';
import Usercontext from './Context';

function Home(){
  var {user, current} = useContext(Usercontext);
  console.log(current.username);
  return (
    <>
    <div>
        <h1>Welcome to Mars Bank, {current.username}</h1>
        <h2>Your current balance is: MARS${current.userbalance}</h2>
    </div>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Header>General Information</Card.Header>
      <Card.Text>Please sign in and perform banking with us.</Card.Text>
      </Card.Body>  
      <Card.Img variant="top" src="images/bank.png"/> 
      </Card>
      

    </>
  );  
}

export default Home;