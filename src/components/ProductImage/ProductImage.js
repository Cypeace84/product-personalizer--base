import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
  console.log('productImage', props);
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {};
export default ProductImage;
