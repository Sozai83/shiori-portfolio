import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare , faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <section id="footer">
      <div className={Styles.wrapper}>
        <ul>
          <li><Link href=""><FontAwesomeIcon icon={faGithubSquare} /></Link></li>
          <li><Link href=""><FontAwesomeIcon icon={faLinkedin} /></Link></li>
          <li><Link href=""><FontAwesomeIcon icon={faTwitterSquare} /></Link></li>          
        </ul>
        <p>&copy; Copyright {currentYear}, Shiori Chiku</p>
      </div>
    </section>
  )
}