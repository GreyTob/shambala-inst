import { ReactSVG } from 'react-svg'
import classes from './SocialItems.module.scss'

import vk from '../../assets/social_icons/negative/vk/vk2.svg'
import instagram from '../../assets/social_icons/negative/Instagram/Negative.svg'
import youTube from '../../assets/social_icons/negative/YouTube/Negative.svg'

const SocialItems = ({ value, href, target, rel }) => (
  <li className={classes.SocialItems}>
    <a href={href} target={target} rel={rel} aria-label={value}>
      <ReactSVG
        src={value === 'vk' ? vk : value === 'inst' ? instagram : youTube}
      />
    </a>
  </li>
)

export default SocialItems
