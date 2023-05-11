import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react';
import axios from "axios";
import Styles from '../../styles/home/ContactForm.module.scss'

//Home page - Skills/Tech stack section
export default function Contact({changeSubmitStatus}) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/chiku.dev@proton.me', {
                name: "FormSubmit",
                message: "Form submitted successfully!"
            })
                .then(response => console.log(response))
                .catch(error => console.log(error));
                changeSubmitStatus();

    }


  return (
          <form className={Styles.form} onSubmit={submitHandler}>
            {/* honepot */}
            <input type="text" name="_honey" style={{'display': 'none'}}/>
            {/* disable captcha */}
            <input type="hidden" name="_captcha" value="false"/>
            <div className={Styles.name}>
                <label for="fname">First Name: </label>
                <input 
                    type="text" 
                    name="fname"
                    id="fname"
                    value={fname} 
                    onChange={(e)=>{setFname(e.target.value)}} 
                    required/>

                <label for="lname">Last Name: </label>
                <input                    
                    type="text" 
                    name="lname" 
                    id="lname"
                    value={lname} 
                    onChange={(e)=>{setLname(e.target.value)}} 
                    required/>
            </div>
            <div className={Styles.email}>
                <label for="email">Email: </label>
                <input
                    type="email" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    required/>
            </div>
            <div className={Styles.query}>
                <label for="query">Questions: </label>
                <textarea
                    type="query" 
                    name="query" 
                    id="query"
                    value={query} 
                    onChange={(e)=>{setQuery(e.target.value)}} 
                    required/>
            </div>
            <button type="submit">Contact Shiori</button>
          </form>

  )
}