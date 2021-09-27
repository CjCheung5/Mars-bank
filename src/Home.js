import { Card } from 'react-bootstrap';
import { CardImg } from 'react-bootstrap';

function Home(){
  return (
    <>
    <div>
        <h1>This is banking app</h1>
    </div>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Header>"BadBank Landing Module"</Card.Header>
      <Card.Title>"Welcome to the bank"</Card.Title>
      <Card.Text>"You can move around using the navigation bar."</Card.Text>
      </Card.Body>  
      <Card.Img variant="top" src="images/bank.png"/> 
      </Card>
      

    </>
  );  
}

export default Home;