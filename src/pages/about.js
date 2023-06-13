import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import AboutContent from './components/about/about'
import Footer from './footer'
import withWaveSection from './wavelayout'

export default function About() {
  return (
    <>
        <Nav bgcolor="white"/>
        <AboutContent/>
        <Footer/>
    </>
  )
}