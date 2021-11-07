import classes from './Contacts.module.scss';

import telegram from '../../assets/icons/telegram.png';
import skype from '../../assets/icons/skype.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import viber from '../../assets/icons/viber.png';

import { useContext } from 'react';
import { Context } from '../../Context';

type ContactsProps = {
  label: string;
  descr: string
}

const Contacts: React.FC<ContactsProps> = ({ label, descr }) => {
  const  data  = useContext(Context);
  return (
    <section className={classes.Contacts}>
      <h3>{label}</h3>
      <p>{descr}</p>

      <div className={classes.icons}>
        {data!.contacts.map((contact) => {
          return (
            <a
              href={contact.href}
              target={contact.target}
              rel={contact.rel}
              aria-label={contact.value}
              key={contact.value}
            >
              <img
                src={
                  contact.value === 'telegram'
                    ? telegram
                    : contact.value === 'skype'
                    ? skype
                    : contact.value === 'whatsapp'
                    ? whatsapp
                    : viber
                }
                alt={contact.value}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
