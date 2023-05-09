import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

/*y despues le devuelve esta boleta por asi decirlos con todos estos datos  
      Long id; 
      String sucursal; 
      Long numeroCotizacion; 
      Integer idVendedor; 
      String patente; 
      String dniCliente; 
      pattern = "dd-MM-yyyy"
      Timestamp fecha; 
      Double precioBase; 
      Double precioTraslado; 
      Double importeIVA; 
      Double gastosAdministrativos; 
      Double gastosGarantia; 
     Boolean garatiaExtendida; 
      Double total; */
const Boleta = (props) => {
  /*const {
    id,
    sucursal,
    numeroCotizacion,
    idVendedor,
    patente,
    dniCliente,
    fecha,
    precioBase,
    precioTraslado,
    importeIVA,
    gastosAdministrativos,
    gastosGarantia,
    garantiaExtendida,
    total
  } = props;*/
  /*  Borrar */
  const sucursal="Surcusal del vendedor";
    const  numeroCotizacion="890";
    const  idVendedor="123";
    const patente="ABC123";
    const dniCliente="12345678";
    const fecha="9-05";
  

    const id="60";
    const precioBase="";
    const precioTraslado="";
    const importeIVA="";
    const gastosAdministrativos="";
    const gastosGarantia="";
    const garantiaExtendida="";
    const total="total";

  return (
    <>
      <div id="boleta" class="">
      <Container className="my-5">
      <h1>Boleta de Cotización</h1>
      <Row className="my-4">
        <Col xs={6}>
          <h4>Sucursal: <h5 id="resultado">{sucursal}</h5></h4>
          <h4>Número de cotización: <h5 id="resultado">{numeroCotizacion}</h5></h4>
          <h4>ID del vendedor:<h5 id="resultado"> {idVendedor}</h5></h4>
        </Col>
        <Col xs={6}>
          <h4>ID: <h5 id="resultado">{id}</h5></h4>
          <h4>Patente: <h5 id="resultado">{patente}</h5></h4>
          <h4>DNI del cliente: <h5 id="resultado">{dniCliente}</h5></h4>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={6}>
          <h4>Fecha: <h5 id="resultado">{fecha}</h5></h4>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Precio Base</th>
            <th>Precio Traslado</th>
            <th>Importe IVA</th>
            <th>Gastos Administrativos</th>
            <th>Gastos Garantía</th>
            <th>Garantía Extendida</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{precioBase}</td>
            <td>{precioTraslado}</td>
            <td>{importeIVA}</td>
            <td>{gastosAdministrativos}</td>
            <td>{gastosGarantia}</td>
            <td>{garantiaExtendida ? 'Sí' : 'No'}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
      <Button type="text">Imprimir</Button>
    </Container>
    
    </div>
    </>
  )
}

export default Boleta