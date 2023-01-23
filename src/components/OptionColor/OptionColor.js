import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({
  setCurrentSize,
  setCurrentPrice,
  currentSize,
  sizes,
}) => {
  return (
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
  );
};

export default OptionColor;
