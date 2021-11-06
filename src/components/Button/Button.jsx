import classes from './Button.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Button = ({ value, descr, to }) => {
  const scrollTop = (val) => window.scrollTo(val);
  return (
    <div className={classes.Button}>
      <Link
        to={to}
        onClick={
          to === '/'
            ? scrollTop({ top: 0 })
            : scrollTop({ top: 0, behavior: 'smooth' })
        }
      >
        <button className={classes['animated-word']}>
          {to === '/' ? <FontAwesomeIcon icon={faArrowLeft} /> : null}
          &nbsp;
          <strong>{value}</strong>
          <br />
          <small>{descr}</small>
        </button>
      </Link>
    </div>
  );
};

export default Button;
