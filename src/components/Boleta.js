import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
/*
y despues le devuelve esta boleta por asi decirlos con todos estos datos  
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
  const {
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
  } = props;



  return (
    <>
      <div id="boleta" class="">
      <Container className="my-5">
      <h1>Boleta de Cotización</h1>
      <Row className="my-4">
        <Col xs={6}>
          <h4>Sucursal: {sucursal}</h4>
          <h4>Número de cotización: {numeroCotizacion}</h4>
          <h4>ID del vendedor: {idVendedor}</h4>
        </Col>
        <Col xs={6}>
          <h4>ID: {id}</h4>
          <h4>Patente: {patente}</h4>
          <h4>DNI del cliente: {dniCliente}</h4>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={6}>
          <h4>Fecha: {fecha}</h4>
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
    </Container>
    </div>



    </>
  )
}

export default Boleta