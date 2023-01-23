import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ({
  setCurrentColor,
  prepareColorClassName,
  colors,
  currentColor,
}) => {
  console.log('colors', colors);
  return (
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
  );
};

export default OptionSize;
