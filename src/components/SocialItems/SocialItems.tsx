import classes from './SocialItems.module.scss';

import { useContext } from 'react';
import { Context } from '../../Context';

import vk from '../../assets/icons/vk.png';
import inst from '../../assets/icons/instagram.png';
import fb from '../../assets/icons/facebook.png';
import ok from '../../assets/icons/odnoklassniki.png';

const SocialItems: React.FC = () => {
  const  data  = useContext(Context);

  return (
    <footer className={classes.SocialItems}>
      <h3>Не забудь подписаться в соцсетях</h3>

      <div className={classes.icons}>
        {data!.socials.map((social) => {
          return (
            <a
              href={social.href}
              target={social.target}
              rel={social.rel}
              aria-label={social.value}
              key={social.value}
            >
              <img
                src={
                  social.value === 'vk'
                    ? vk
                    : social.value === 'fb'
                    ? fb
                    : social.value === 'ok'
                    ? ok
                    : inst
                }
                alt={social.value}
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default SocialItems;
