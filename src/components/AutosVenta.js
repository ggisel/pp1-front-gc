import React from 'react'
import { autos } from './autos';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col} from 'react-bootstrap';

const AutosVenta = () => {
  /*const results = users.filter((user) => {

  });*/
  return (
    <>
      <h1 id="titulo-ventana-autos">Comprar Vehículo</h1>
      <div id="auto-cuadro">
      <Row style={{ padding: '2em'}}>
          {autos.map((auto) => (
            <Col sm={4} key={auto.id} style={{ marginBottom: '2em' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={auto.imagen} />
                <Card.Body>
                  <Card.Title>{auto.marca}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{auto.modelo}</Card.Subtitle>
                  <Card.Text>
                    {auto.anio}
                  </Card.Text>
                  <Card.Title>${auto.precio}</Card.Title>
                  <Link to={`/compra/${auto.id}`}>
                    <Button style={{ fontWeight: 'bold' }} variant="warning">VER MAS +</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div >

    </>
  )
}

export default AutosVenta