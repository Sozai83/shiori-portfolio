import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Styles from '../styles/About.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare , faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <section id="footer">
        <ul>
            <Link href=""><FontAwesomeIcon icon={faGithubSquare} /></Link>
            <Link href=""><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link href=""><FontAwesomeIcon icon={faTwitterSquare} /></Link>
        </ul>
        <p>Footer</p>
    </section>
  )
}