import React from "react";
import {Container, Row, Col ,Card, Button } from "react-bootstrap";
//const ProductsList = ({ item }) => {
  //  function ItemList() { 
const ProductsList =()=> {
  return (
    <><h1 className="title">Productos</h1>
    <Container>
       <Row xs={1} sm={2} md={3} lg={4} className="g-4"> {/*muestra 4*/}
       {/* {Array.from({ length: 1 }).map((_, idx) => ({/*length: dice cuanta veces repito en la fila
          <Col key={idx}>*/}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
              
          
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
              
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
              
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>4</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>

              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>5</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
              
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <Card.Body>
                <Card.Title>6</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Corolla</Card.Subtitle>
                <Card.Text>$15000</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
           

          </Card>
          {/*</Col>
        ))}*/}
      </Row>
      </Container>
      </>
      );

      }

      export default ProductsList;
//export default ItemList;