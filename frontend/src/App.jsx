import {Alert, Button, Container} from 'react-bootstrap'

function Card(props) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h1>{props.product}</h1>
      </div>
      <div className="card-body">
        <h2>{props.id}</h2>
        <Button variant='primary'>Comprar</Button>
      </div>
    </div>
  );
}

function Home() {
  const products = [
    { name: "Product 1", id: 1 },
    { name: "Product 2", id: 2 },
    { name: "Product 3", id: 3 },
  ];

  return (
    <Container>
      <Alert className="mt-4">
        This is a primary alert—check it out!
      </Alert>

      {products.map((product) => (
        <Card 
          id={product.id} 
          key={product.id} 
          product={product.name}
        />
      ))}
    </Container>
  );
}

export default Home;
