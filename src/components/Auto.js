import React, { useState }from 'react'
import { useParams } from 'react-router-dom';
import { autos } from './autos';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Auto = () => {
  
  let { autoId } = useParams();
let autoSelected = autos.find(auto => auto.id === autoId);
  
/* */
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 id="titulo-ventana-auto">Auto</h1>
    <Row>
        <Col xs={12} md={6}>
          <Image src={autoSelected.imagen} alt="Descripción de la imagen" fluid />
        </Col>
          <Col id="datos-auto" xs={12} md={6}>
            {/* Acá agrego los demás datos del auto */}
            <h1>{autoSelected.marca}</h1>
            <h2>{autoSelected.modelo}</h2>
            <h2>{autoSelected.anio}</h2>
            <h2>{autoSelected.precio}</h2>
            <h2>Importado:{autoSelected.importado}</h2>
            <h2>Informacion Técnica:</h2>
            <h2>{autoSelected.combustible}</h2>
            <h2>Kilometraje: {autoSelected.kilometraje}</h2>
            <Button style={{ fontWeight: 'bold' }} variant="primary">Consulta</Button>{' '}
            <Button style={{ fontWeight: 'bold' }} variant="primary">Reserva $$$</Button> {' '}
            <Button variant="primary" onClick={handleShow}>
       Observaciones
      </Button>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </> 
  ) 
}

export default Auto