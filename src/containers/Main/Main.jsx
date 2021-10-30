// import { useState } from 'react';
import classes from './Main.module.scss';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const Main = () => {
  const main = {
    social: [
      {
        value: 'vk',
        href: 'https://vk.com/yogashambala74',
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        value: 'inst',
        href: 'https://www.instagram.com/shambhala_yoga/',
        target: '_blank',
        rel: 'noreferrer',
      },
      {
        value: 'youTube',
        href: 'https://www.youtube.com/channel/UCH8EG88m8-wFtm4E4Gnqs1Q',
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  };

  return (
    <div className={classes.Main}>
      <Logo />
      {main.social.map((i) => {
        console.log(i);
        return (
          <Button value={i.value} href={i.href} target={i.target} rel={i.rel} />
        );
      })}
    </div>
  );
};

export default Main;
