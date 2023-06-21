import {useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router";
import ReactDOM from "react-dom/client";
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../styles/Nav.module.scss'

export default function Nav({bgcolor}) {
    const topNavUl = useRef();
    const router = useRouter();
    const [showMobNav, setShowMobNav] = useState(false);
    const mobNavHandler = function(){
        setShowMobNav(showMobNav ? false : true);
    }

  return (
    <section id="top-navigation" className={Styles[bgcolor]}>
        <div className={Styles.wrapper}>
            <figure>
                <Link href='/'>
                    <Image src='/chikku_logo.png' alt="Chikku Webdesign Logo" className={Styles.logo} width={160} height={100}/>
                </Link>  
            </figure>
            <nav id="deskToptNav" className={`${Styles.topNav} ${Styles.deskToptNav}`}>
                <ul ref={topNavUl} className={Styles.navList}>
                    <li id="topnav-home" className={ router.pathname == "/" ? Styles.active : ""}><Link  href="/">Home</Link></li>
                    <li id="topnav-about" className={ router.pathname == "/about" ? Styles.active : ""}><Link href="/about">About</Link></li>
                    <li id="topnav-projects" className={ /projects/.test(router.pathname) ? Styles.active : ""}><Link href="/projects">Projects</Link></li>
                    <li id="topnav-contact" className={ router.pathname == "/contact" ? Styles.active : ""}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <nav id="mobileNav" className={`${Styles.topNav} ${Styles.mobNav}`}>
                <button onClick={mobNavHandler}>Menu</button>
                <ul 
                className=
                {`${Styles.mobNavList} 
                ${showMobNav ? Styles.show : Styles.hidden}`}>
                    <li>
                        <Link  href="/">Home</Link>
                    </li>
                    <li>
                        <Link  href="/about">About</Link>
                    </li>
                    <li>
                        <Link  href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link  href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    

  )
}
