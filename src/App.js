import React, { useState } from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Producto from "./components/";

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; //useHistory

import ProductDetails from './components/ProductDetails';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product',
    price: 10,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the second product',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the third product',
    price: 30,
    image: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  {/*const [selectedProduct, setSelectedProduct] = useState(null);

  const history = useNavigate();

  const handleClick = (id) => {
    history.push(`/products/${id}`);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    history.push(`/products/${product.id}`);
  };*/}

  return (
    <div className="App">
      <Header />

      {/* <Router>
        <div className="container">
          <h1>Products</h1>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={product.image} alt={product.name} />
                  <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/*<Link to={`/products/${product.id}`} className="btn btn-sm btn-outline-secondary">
                      View
                    </Link>*/}
                      {/*<button onClick={() => handleClick(product.id)} className="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <small className="text-muted">${product.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails product={selectedProduct} />} />
          </Routes>
        </div>
      </Router> */}

    <productoSeleccionado/>

      <Footer />
    </div>
  );
}

export default App;
