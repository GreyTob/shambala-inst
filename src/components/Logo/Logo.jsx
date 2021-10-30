import classes from './Logo.module.scss';
// import LogoPicture from './assets/Logo.png';

const Logo = () => (
  <figure className={classes.Logo}>
    <figcaption className={classes.figcaption}>
      Йога в Магнитогорске. Студия йоги "Шамбала"
    </figcaption>

    {/* <div className={classes.picture}>
      <img
        className={classes.rotating}
        src={LogoPicture}
        alt="logo"
        loading="lazy"
      />
    </div> */}
  </figure>
);

export default Logo;
