import Image from 'next/image'
import Link from 'next/link'
import Nav from './nav'
import Styles from '../../styles/otherComponents/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare , faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


export default function Footer({bgcolor}) {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <section id="footer" className={Styles[bgcolor || 'ivory']}>
      <div className={Styles.wrapper}>
        <ul>
          <li><Link href="https://github.com/Sozai83"><FontAwesomeIcon icon={faGithubSquare} /></Link></li>
          <li><Link href="https://www.linkedin.com/in/shiori-chiku/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
          <li><Link href="https://twitter.com/DevShiori"><FontAwesomeIcon icon={faTwitterSquare} /></Link></li>          
        </ul>
        <p>&copy; Copyright {currentYear}, Shiori Chiku</p>
      </div>
    </section>
  )
}