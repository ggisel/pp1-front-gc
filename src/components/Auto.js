import React from 'react'
import {useParams } from 'react-router-dom';
import { autos } from './autos';

const Auto = () => {
  
  let { autoId } = useParams();
  let autoSelected = autos.find(auto => auto.id === autoId);
  
  return (
      <>
      <h1 id="titulo-ventana-auto">Auto</h1>
      <h1 id="titulo-ventana-auto">{autoSelected.marca}</h1>
      </>
  )
}

export default Auto