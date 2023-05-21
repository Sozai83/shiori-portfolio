import {useState, useEffect } from 'react'
import ReactDOM from "react-dom/client"
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../styles/home/SideNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faEgg } from '@fortawesome/free-solid-svg-icons';


export default function Nav({active, setActive}) {
    const sideNavigation = (el)=>{
        const element = el.target;
        const elementTag = element.tagName;
        const arrTag = ["path", "li", "a", "svg"]
        
        if(arrTag.includes(elementTag)){
            const tempId = elementTag == "path" ? element.parentNode.parentNode.id : 
                            elementTag == "svg" ? element.parentNode.id : element.id;
            const id = tempId.split('-')[1];
            setActive(id);
        }
    }

  return (
        <section id="side-navigation" className={Styles.sideNavSection}>
            <div className={Styles.wrapper}>
                <nav id="sideNav" className={Styles.sideNav} onClick={sideNavigation}>
                    <ul className={Styles.navList}>
                        <li id="sidenav-welcome">
                            <Link id="sidenavlink-welcome" href="#welcome">
                                <FontAwesomeIcon icon={active == "welcome" ? faKiwiBird : faEgg} />
                            </Link>
                        </li>
                        <li id="sidenav-project">
                            <Link id="sidenavlink-recentwork" href="#recentwork">
                                <FontAwesomeIcon icon={active == "recentwork" ? faKiwiBird : faEgg} />
                            </Link>
                        </li>
                        <li id="sidenav-shortaboutme">
                            <Link id="sidenavlink-shortaboutme" href="#shortaboutme">
                                <FontAwesomeIcon icon={active == "shortaboutme" ? faKiwiBird : faEgg} />
                            </Link>
                        </li>
                        <li id="sidenav-contact">
                            <Link id="sidenavlink-contact" href="#contact">
                                <FontAwesomeIcon icon={active == "contact"  ? faKiwiBird : faEgg} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
  )
}
