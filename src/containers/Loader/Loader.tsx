import classes from './Loader.module.scss';
import logo from '../../assets/Logo.png';

const Loader:React.FC = () =>  (
    <section className={classes.Loader}>
      <img src={logo} alt="Логотип" />
    </section>
  );

export default Loader;
