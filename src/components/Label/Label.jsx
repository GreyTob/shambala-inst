import classes from './Label.module.scss';

const Logo = ({ name, descr }) => (
  <header className={classes.Label}>
    <h1>{name}</h1>
    <h2>{descr}</h2>
  </header>
);

export default Logo;
