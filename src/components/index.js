import React from 'react';

import { useNavigate } from 'react-router-dom';

//function Producto(props) {
    const Producto = ({ product }) => {
      const history = useNavigate();
    
      const handleClick = () => {
        history.push(`/product/${product.id}`);
      };
    
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary" onClick={handleClick}>
              Ver detalles
            </button>
          </div>
        </div>
      );
    };
 

export default Producto;