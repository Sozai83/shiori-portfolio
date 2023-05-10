import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/Contact.module.scss'

//Home page - Skills/Tech stack section
export default function Contact() {

  return (
    
    <section id="contact">
        <div className={Styles.wrapper}>
          <h1>
              Contact
          </h1>
          <form action="https://formsubmit.co/chikushi3.227@gmail.com" method="POST">
              <input type="text" name="name" required/>
              <input type="email" name="email" required/>
              <button type="submit">Send</button>
          </form>
          

          
        </div>
    </section>
      

  )
}