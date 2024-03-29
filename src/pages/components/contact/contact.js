import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect, forwardRef} from 'react'
import ContactForm from './contactform'
import Thankyou from './thankyou'
import Styles from '../../../styles/contact/Contact.module.scss'


//Home page - Skills/Tech stack section
const Contact = forwardRef(({}, ref) => {
  const [submit, setSubmit] = useState(false);
  const changeSubmitStatus = ()=>{
    setSubmit(submit ? false : true);
  }
  return (
    
    <section id="contact" ref={ref}>
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
})

export default Contact;