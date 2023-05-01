import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Styles from '../styles/About.module.scss'

export default function About() {
  return (
    <section>
        <Nav/>
        <div class={Styles.wrapper}>
            <h1>Thanks for visiting my portfolio!</h1>
            <h2>Here's a bit more about me...</h2>
        </div>
    </section>
  )
}