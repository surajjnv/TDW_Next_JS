import React from 'react';
import Product from './Productcat';

function ProductList({ companydata }) {
  const productList = companydata?.DATA?.PRDSERV?.[0]?.PRODLIST || [];

  if (productList.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div id="paginate" className="df ffw jcc">
      {productList.map((item, index) => (
        <Productctg key={index} item={item} index={index} />
      ))}
    </div>
  );
}

export default ProductList;
