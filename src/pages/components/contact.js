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
          <form>
            <input type="submit"/>
          </form>
          

          
        </div>
    </section>
      

  )
}