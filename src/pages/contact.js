import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Contact from './components/contact'
import Footer from './footer'
import withWaveSection from './wavelayout'
import Styles from '../styles/About.module.scss'

const ContactWave = withWaveSection(Contact, "#EEEDE7", "pewter");
const NavWave = withWaveSection(Nav, "#D0D1D3", "ivory");

export default function About() {
  return (
    <section>
        <NavWave/>
        <ContactWave/>
        <Footer />
    </section>
  )
}