import classes from './Label.module.scss';

type LogoProps = {
  name: string;
  descr: string;
 }

const Logo: React.FC<LogoProps> = ({ name, descr }) => (
  <header className={classes.Label}>
    <h1>{name}</h1>
    <h2>{descr}</h2>
  </header>
);

export default Logo;
