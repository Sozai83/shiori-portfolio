import Image from 'next/image'
import Nav from '../components/nav'
import Footer from '../footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <>
    <Nav tempActive="topnav-home"/>
    <main>
        
    </main>
    <Footer/>
    </>
  )
}
