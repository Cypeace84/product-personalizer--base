import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

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
      <OptionColor
        setCurrentSize={setCurrentSize}
        setCurrentPrice={setCurrentPrice}
        currentSize={currentSize}
        sizes={sizes}
      />
      <OptionSize
        setCurrentColor={setCurrentColor}
        prepareColorClassName={prepareColorClassName}
        colors={colors}
        currentColor={currentColor}
      />

      <Button
        className={styles.button}
        color={currentColor}
        size={currentSize}
        price={getPrice}
        name={title}
      >
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
