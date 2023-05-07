import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare , faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

//Check this out
export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <form action="https://formsubmit.co/chikushi3.227@gmail.com" method="POST">
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <button type="submit">Send</button>
    </form>
  )
}