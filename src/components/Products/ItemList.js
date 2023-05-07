import React from 'react';
import { Table } from 'react-bootstrap';

function ItemList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Artículo</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Llantas</td>
          <td>Juego de llantas deportivas</td>
          <td>$1,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Stereo</td>
          <td>Stereo de alta fidelidad</td>
          <td>$500</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Asientos</td>
          <td>Juego de asientos de cuero</td>
          <td>$2,000</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ItemList;