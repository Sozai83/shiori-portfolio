import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  Styles from  '../../styles/Nav.module.scss'

export default function Nav() {
    const {active, setActive} = useState();
    const changeActive = (event)=>{
        
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
                <ul className={Styles.navlist}>
                    <li id="topnav-home" className={Styles.active}><Link href="/">Home</Link></li>
                    <li id="topnav-about"><Link href="/about">About</Link></li>
                    <li id="topnav-projects"><Link href="">Projects</Link></li>
                    <li id="topnav-resume"><Link href="./resume">Resume</Link></li>
                    <li id="topnav-contact"><Link href="">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </section>
    

  )
}
