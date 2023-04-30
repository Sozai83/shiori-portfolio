import Image from 'next/image'
import Link from 'next/link'
import  Styles from  '../../styles/Nav.module.scss'

export default function Nav() {
  return (
    <section id="top-navigation">
        <div className={Styles.wrapper}>
            <figure>
                <Link href='/'>
                    <Image src='/chikku_logo.png' alt="Chikku Webdesign Logo" width="300" height="100"/>
                </Link>  
            </figure>
            <nav id="topNav">
                <ul className={Styles.navlist}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="">Projects</Link></li>
                    <li><Link href="./resume">Resume</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </section>
    

  )
}
