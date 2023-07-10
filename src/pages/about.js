import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import AboutContent from './components/about/aboutWrapper'
import Footer from './components/footer'
import withWaveSection from './components/wavelayout'

const AboutContentWave = withWaveSection(AboutContent, '#EEEDE7', 'white');

export default function About() {
  return (
    <>
        <Nav bgcolor="white"/>
        <AboutContentWave/>
        <Footer/>
    </>
  )
}