import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react';
import Warning from './warning'
import axios from "axios";
import Styles from '../../styles/home/ContactForm.module.scss'

//Home page - Skills/Tech stack section
export default function Contact({changeSubmitStatus}) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [emailVal, setEamilVal] = useState(true);

    const submitHandler = (e)=>{
        e.preventDefault();
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/chiku.dev@proton.me', {
                name: `${fname} ${lname}`,
                email: email,
                message: query
            })
                .then(() => console.log('Form submitted successfully'))
                .catch(error => console.log(error));
            changeSubmitStatus();

    }

    const isEmpty = function(val){
        return val.length == 0;
    }

    const fNameOnChangeHandler = function(e){
        const fname = e.target.value;
        if (fname.length < 50){
            setFname(fname);
        }
    }

    const lNameOnChangeHandler = function(e){
        const lname = e.target.value;
        if (lname.length < 50){
            setLname(lname);
        }
    }

    const emailOnChangeHandler = function(e){
        const email = e.target.value;
        setEmail(email);
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || email.length == 0){
            setEamilVal(true);
        }else{
            setEamilVal(false);
        }
    }


  return (
          <form className={Styles.form} onSubmit={submitHandler}>
            {/* honepot */}
            <input type="text" name="_honey" style={{'display': 'none'}}/>
            {/* disable captcha */}
            <input type="hidden" name="_captcha" value="false"/>
            {(isEmpty(fname) || isEmpty(lname) || isEmpty(email) || isEmpty(query) || !emailVal) &&
            <Warning 
                isfName={isEmpty(fname)} 
                islName={isEmpty(lname)} 
                isEmail = {isEmpty(email)} 
                isQuery = {isEmpty(query)}
                emailVal={emailVal}/>
            }
            <div className={Styles.name}>
                <label htmlFor="fname">First Name: </label>
                <input 
                    type="text" 
                    name="fname"
                    id="fname"
                    value={fname} 
                    onChange={fNameOnChangeHandler} 
                    required/>

                <label htmlFor="lname">Last Name: </label>
                <input                    
                    type="text" 
                    name="lname" 
                    id="lname"
                    value={lname} 
                    onChange={lNameOnChangeHandler} 
                    required/>
            </div>
            <div className={Styles.email}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={emailOnChangeHandler} 
                    required/>
            </div>
            <div className={Styles.query}>
                <label htmlFor="query">Questions: </label>
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