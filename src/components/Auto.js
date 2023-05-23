import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { autos } from './autos';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const Auto = () => {

  let { autoId } = useParams();
  let autoSelected = autos.find(auto => auto.id === autoId);

  /* */
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 id="titulo-ventana-auto">Reservar Auto</h1>
      <Row style={{ padding: '2em' }}>
        <Col xs={12} md={6}>
          <Image src={autoSelected.imagen} alt="Descripción de la imagen" fluid />
        </Col>
        <Col id="datos-auto" xs={12} md={6}>
          {/* Acá agrego los demás datos del auto */}
          <h1>{autoSelected.marca}</h1>
          <h2 style={{ fontSize: '20px', color: 'gray' }}>{autoSelected.modelo}</h2>
          <h2 style={{ fontSize: '20px' }}>{autoSelected.anio}</h2>

          <h2>${autoSelected.precio}</h2>
          <br />
          <h2 style={{ fontSize: '18px' }}>Informacion Técnica:</h2>
          <h2 style={{ fontSize: '14px', color: 'gray' }}>{autoSelected.combustible}</h2>
          <h2 style={{ fontSize: '14px', color: 'gray' }}>Kilometraje: {autoSelected.kilometraje} km</h2>
          <h2 style={{ fontSize: '14px', color: 'gray' }}>Importado:{autoSelected.importado}</h2>

          <Button onClick={() => setLgShow(true)} style={{ fontWeight: 'bold' }} variant="outline-dark">
            Consulta
          </Button>{' '}
          <Button style={{ fontWeight: 'bold' }} variant="dark" onClick={handleShow}>
            Observaciones
          </Button>{' '}
          <Button style={{ fontWeight: 'bold' }} variant="warning">Reserva $$$</Button> {' '}
          

        </Col>
      </Row>

      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Observaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>Distintas observaciones del auto</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Consultar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form id="formulario">

            {/* -----Nombre del Cliente------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombreC">
              <Form.Label column sm="2">
                Nombre:
              </Form.Label>
              <Col sm="10">

                <Form.Control type="text" placeholder="Agregue el Nombre"
                  required />

                <Form.Control.Feedback type="invalid">
                  Por favor, proporcione un Nombre del Cliente válido.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* -----Apellido del Cliente------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextApellidoC">
              <Form.Label column sm="2">
                Apellido:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Agregue el Apellido"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, proporcione un Apellido del Cliente válido.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* -----Mail del Cliente------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Mail:
              </Form.Label>
              <Col sm="10">

                <Form.Control type="email" placeholder="Agregue el mail" required />

                <Form.Control.Feedback type="invalid">
                  Por favor, proporcione un Email válido.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* -----Teléfono del Cliente------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextTelefono">
              <Form.Label column sm="2">
                Teléfono:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="tel"
                  placeholder="Agregue el Teléfono"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, proporcione un Teléfono válido.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* -----Sucursal de Contacto------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSucursal">
              <Form.Label column sm="2">
                Sucursal de Contacto:
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select" defaultValue="Elegir...">
                  <option disabled>Elegir...</option>
                  <option>Sucursal 1</option>
                  <option>Sucursal 2</option>
                  <option>Sucursal 3</option>
                </Form.Control>
              </Col>
            </Form.Group>

            {/* -----Mensaje------ */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextMensaje">
              <Form.Label column sm="2">
                Mensaje:
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" placeholder="Mensaje (opcional)" rows={3} />
              </Col>
            </Form.Group>
            <Button variant="warning">Enviar datos</Button>
          </Form>


        </Modal.Body>
      </Modal>


    </>
  )
}

export default Auto