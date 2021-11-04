import classes from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ value, descr, to }) => (
  <div className={classes.Button}>
    <Link to={to}>
      <button className={classes['animated-word']}>
        <strong>{value}</strong>
        <br />
        <small>{descr}</small>
      </button>
    </Link>
  </div>
);

export default Button;
