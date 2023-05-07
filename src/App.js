import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import ProductsList from "./components/Products/ProductsList";

function App() {
  return (

    <div className="App">
      <Header/>

      <ProductsList/>

      <Footer/>
    </div>
  );
}

export default App;
