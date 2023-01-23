import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log(
          'Name:',
          props.name,
          'Price:',
          props.price,
          'Size:',
          props.size,
          'Color:',
          props.color
        );
      }}
      className={clsx(styles.button, props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
