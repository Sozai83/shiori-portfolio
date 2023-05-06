import Image from 'next/image'
import Nav from './nav'
import SideNav from './sidenav'
import Welcome from './welcome'
import RecentWork from './recentWork'
import ShortAboutMe from './short_about_me'
import Contact from './contact'
import Footer from '../footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <>
    <Nav tempActive="topnav-home"/>
    <main>
        <SideNav/>
        <Welcome name=""/>
        <RecentWork/>
        <ShortAboutMe/>
        <Contact/>
        <Footer/>
    </main>
    </>
  )
}
