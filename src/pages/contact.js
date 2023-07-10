import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Contact from './components/contact/contact'
import Footer from './components/footer'
import withWaveSection from './components/wavelayout'
import Styles from '../styles/About.module.scss'

const ContactWave = withWaveSection(Contact, "#EEEDE7", "pewter");

export default function About() {
  return (
    <section>
        <Nav bgcolor="pewter"/>
        <ContactWave/>
        <Footer />
    </section>
  )
}