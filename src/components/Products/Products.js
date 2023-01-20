import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product) => (
        // setProducts([...product, { key: product.id }]),
        <Product key={product.id} {...product} />
      ))}
      {/* <Product
        id={products[1].id}
        name={products[1].name}
        title={products[1].title}
        colors={products[1].colors}
        sizes={products[1].sizes}
        basePrice={products[1].basePrice} /> */}
    </section>
  );
};

export default Products;
