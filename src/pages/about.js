import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import AboutContent from './components/about/about'
import Footer from './footer'
import withWaveSection from './wavelayout'
import Styles from '../styles/About.module.scss'

const NavWave = withWaveSection(Nav, '#ffffff', 'ivory');

export default function About() {
  return (
    <>
        <NavWave/>
        <AboutContent/>
        <Footer/>
    </>
  )
}