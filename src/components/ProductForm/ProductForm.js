import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const ProductForm = ({
  setCurrentSize,
  setCurrentPrice,
  setCurrentColor,
  prepareColorClassName,
  getPrice,
  sizes,
  colors,
  title,
  currentColor,
  currentSize,
}) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((size) => (
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
          {colors.map((color) => (
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
        name={title}
      >
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
