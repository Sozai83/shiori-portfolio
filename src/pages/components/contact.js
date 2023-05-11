import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import ContactForm from './contactform'
import Thankyou from './thankyou'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/Contact.module.scss'


//Home page - Skills/Tech stack section
export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const changeSubmitStatus = ()=>{
    setSubmit(submit ? false : true);
  }

  useEffect(()=>{
    console.log(submit);
  }, [submit])

  return (
    
    <section id="contact">
        <div className={Styles.wrapper}>
          <h1>
              Contact
          </h1>
          {submit && <Thankyou  changeSubmitStatus={changeSubmitStatus}/>}
          {!submit &&
          <ContactForm changeSubmitStatus={changeSubmitStatus} />
          }          
        </div>
    </section>
      

  )
}