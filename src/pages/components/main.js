import Image from 'next/image'
import Nav from './nav'
import SideNav from './sidenav'
import Welcome from './welcome'
import RecentWork from './recentWork'
import ShortAboutMe from './short_about_me'
import Contact from './contact'
import Footer from '../footer'
import { Inter } from 'next/font/google'
import {useRef} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  const welcome = useRef();
  const recentWork = useRef();
  const aboutMe = useRef();
  const contact = useRef();

  return (
    <>
    <Nav tempActive="topnav-home"/>
    <main>
        <SideNav/>
        <Welcome 
          ref={welcome}/>
        <RecentWork 
          ref={recentWork}/>
        <ShortAboutMe 
          ref={aboutMe}/>
        <Contact 
          ref={contact}/>
        <Footer/>
    </main>
    </>
  )
}
// Check this tomorrow
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://stackoverflow.com/questions/69566725/update-url-in-browser-while-scrolling-a-page-in-react