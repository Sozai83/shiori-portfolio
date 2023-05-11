import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Contact from './components/contact'
import Footer from './footer'
import Styles from '../styles/About.module.scss'

export default function About() {
  return (
    <section>
        <Nav/>
        <div className={Styles.wrapper}>
            <Contact/>
        </div>
        <Footer />
    </section>
  )
}