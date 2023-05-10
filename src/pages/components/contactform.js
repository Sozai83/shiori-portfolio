import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/Contact.module.scss'

//Home page - Skills/Tech stack section
export default function Contact() {

  return (
          <form action="https://formsubmit.co/chikushi3.227@gmail.com" method="POST">
            {/* honepot */}
            <input type="text" name="_honey" style={{'display': 'none'}}/>
            {/* disable captcha */}
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_honey" style={{'display': 'none'}}/>
            <label for="fname">First Name: </label>
            <input type="text" name="fname" required/>
            <label for="lname">Last Name: </label>
            <input type="text" name="lname" required/>
            <label for="email">Email: </label>
            <input type="email" name="email" required/>
            <label for="email">Email: </label>
            <input type="email" name="email" required/>
            <button type="submit">Send a email to me!</button>
          </form>

  )
}