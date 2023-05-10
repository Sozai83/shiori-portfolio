import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './contactform'
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
          <ContactForm />
          

          
        </div>
    </section>
      

  )
}