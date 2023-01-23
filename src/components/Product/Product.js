import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState, useMemo } from 'react';

const Product = (props) => {
  console.log(props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(
    props.sizes[0].additionalPrice
  );

  console.log('currentColor', currentColor);
  console.log('currentSize', currentSize);
  console.log('currentPrice', currentPrice);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = useMemo(() => {
    return currentPrice + props.basePrice;
  }, [currentPrice]);

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        color={currentColor}
      />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice}$</span>
        </header>
        <ProductForm
          prepareColorClassName={prepareColorClassName}
          getPrice={getPrice}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          currentSize={currentSize}
          title={props.title}
        />
      </div>
    </article>
  );
};

export default Product;
