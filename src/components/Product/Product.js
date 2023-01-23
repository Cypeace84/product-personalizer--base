import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useState } from 'react';

const Product = (props) => {
  console.log(props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(
    props.sizes[0].additionalPrice
  );
  // const [isActive, setIsActive] = useState(false);

  console.log('currentColor', currentColor);
  console.log('currentSize', currentSize);
  console.log('currentPrice', currentPrice);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    return currentPrice + props.basePrice;
  };

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
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button
                    onClick={(e) => {
                      setCurrentSize(size.name);
                      setCurrentPrice(size.additionalPrice);
                    }}
                    className={clsx(currentSize === size.name && styles.active)}
                    type='button'
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    onClick={(e) => setCurrentColor(color)}
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color && styles.active
                    )}
                    type='button'
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.button}
            color={currentColor}
            size={currentSize}
            price={getPrice()}
            name={props.title}
          >
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
