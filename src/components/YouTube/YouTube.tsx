import classes from './YouTube.module.scss';
import youTube from '../../assets/icons/icon-youtube.png';

import { useContext } from 'react';
import { Context } from '../../Context';

const YouTube: React.FC = () => {
  const  data  = useContext(Context);
  const { href, rel, value, target } = data!.youTube;

  return (
    <section className={classes.YouTube}>
      <h3>
        Смотри больше полезных видео <br /> на YouTube канале
      </h3>
      <a href={href} target={target} rel={rel} aria-label={value}>
        <img src={youTube} alt="youTube" />
      </a>
    </section>
  );
};

export default YouTube;
