import {useState, useRef, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import Image from 'next/image'
import Link from 'next/link'
import  Styles from  '../../styles/Nav.module.scss'

export default function Nav() {
    const [active, setActive] = useState('topnav-home');
    const [lists, setLists] = useState();
    const topNavUl = useRef();
    let activeEl = active;

    useEffect(()=> {
        setLists(topNavUl.current.children);    
        
        activeEl = document.getElementById(active);
        console.log(active)
        console.log(activeEl);
        addActive(activeEl);
    }, [active]);

    const changeActive = (event)=>{
        const clickedEl = event.target;
        const isList = event.target.tagName == 'LI' || event.target.tagName == 'A' ? true : false;

        if(isList){
            const tempEl = event.target.tagName == 'LI' ? clickedEl : clickedEl.parentNode;
            const tempActiveId = tempEl.id;
            setActive(tempActiveId);
            let listItems = Object.keys(lists);
            listItems.forEach( li => removeActive(lists[li]));
        }
    }

    const addActive = (el)=>{
        el.classList.add(Styles.active);
    }

    const removeActive = (el)=>{
        el.classList.remove(Styles.active);
    }

  return (
    <section id="top-navigation">
        <div className={Styles.wrapper}>
            <figure>
                <Link href='/'>
                    <img src='/chikku_logo.png' alt="Chikku Webdesign Logo" className={Styles.logo}/>
                </Link>  
            </figure>
            <nav id="topNav" className={Styles.topNav}>
                <ul ref={topNavUl} className={Styles.navlist} onClick={changeActive}>
                    <li id="topnav-home" className={Styles.active}><Link href="/">Home</Link></li>
                    <li id="topnav-about"><Link href="/about">About</Link></li>
                    <li id="topnav-projects"><Link href="/projects">Projects</Link></li>
                    <li id="topnav-resume"><Link href="./resume">Resume</Link></li>
                    <li id="topnav-contact"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </section>
    

  )
}
