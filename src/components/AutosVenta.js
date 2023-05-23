import React from 'react'
import { autos } from './autos';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const AutosVenta = () => {
  /*const results = users.filter((user) => {

  });*/
  return (
    <>
      <h1 id="titulo-ventana-autos">Comprar Vehículos</h1>
      <div id="auto-cuadro">
      {autos.map((auto) => (
                <tr key={auto.id}>
                  <td>{auto.anio}</td>
                  <td>{auto.marca}</td>
                  <td>{auto.modelo}</td>
                  <td>{auto.kilometraje}</td>
                  <td>{auto.combustible}</td>
                  <td>{auto.importado}</td>
      
                  <td>
                    {/* ---------- Agrego consegui patente  -------*/}
                    {/* ---------- interpolacion de varieables  -------*/}
                    <Link to={`/compra/${auto.id}`}>
                      <Button variant="primary">Auto </Button>
                    </Link>
                  </td>
                </tr>
              ))}
              </div>

    </>
  )
}

export default AutosVenta