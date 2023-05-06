import {useState, useEffect } from 'react'
import ReactDOM from "react-dom/client"
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../styles/Nav.module.scss'

export default function Nav() {

    const [active, setActive] = useState();
    useEffect(()=>{


    }, [active]);

    const sideNavigation = (el)=>{
        const element = el.target;
        if(element.element === "li"){
            //element.id should be sidenav-XXX and assign XXX as id
            const id = element.id.split('-')[1];
        }
    }

  return (
    <section id="side-navigation" className={Styles.sideNavSection}>
        <div className={Styles.wrapper}>
            <nav id="sideNav" className={Styles.sideNav} onClick={sideNavigation}>
                <ul ref={topNavUl} className={Styles.navList}>
                    <li id="sidenav-top" className={ router.pathname == "top" ? Styles.active : ""}><Link  href="/">Home</Link></li>
                    <li id="sidenav-project" className={ router.pathname == "project" ? Styles.active : ""}><Link  href="/">Home</Link></li>
                    <li id="topnav-about" className={ router.pathname == "about" ? Styles.active : ""}><Link href="/about">About</Link></li>
                    <li id="topnav-contact" className={ router.pathname == "contact" ? Styles.active : ""}><Link href="/projects">Projects</Link></li>
                </ul>
            </nav>
        </div>
    </section>
    

  )
}
