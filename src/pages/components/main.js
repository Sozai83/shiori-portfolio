import Image from 'next/image'
import Nav from './nav'
import Welcome from './welcome'
import Skills from './skills'
import Contact from './contact'
import Footer from '../footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <main>
        <Nav tempActive="topnav-home"/>
        <Welcome name=""/>
        <Skills/>
        <Contact/>
        <Footer/>
    </main>
  )
}
