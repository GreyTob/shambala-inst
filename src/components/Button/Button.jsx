import classes from './Button.module.scss';

const Button = ({ value, href, target, rel }) => {
  return (
    <div className={classes.Button}>
      <button className={classes['animated-word']}>
        <a href={href} target={target} rel={rel} aria-label={value}>
          {value}
        </a>
      </button>
    </div>
  );
};

export default Button;
