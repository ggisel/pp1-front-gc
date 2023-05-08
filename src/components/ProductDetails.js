import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductDetails;

// import React from 'react';

// const ProductDetails = ({ product }) => {
//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <img src={product.image} alt={product.name} />
//     </div>
//   );
// };

// export default ProductDetails;