import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Styles from '../styles/About.module.scss'

export default function About() {
  return (
    <section>
        <Nav/>
        <div className={Styles.wrapper}>
            <h1>Hi There, thanks again for visiting my portfolio!</h1>
            <h2>Here's a bit more about me...</h2>
            <div class={Styles.description}>
              <p>
                I have strong background as a office administrator and a client service officer with over 4 years of experiences. Improving work efficiency is one of my biggest passion for work and it lead me interested in I.T. systems and programming.
                I started studying web development in April 2020. Learning all by myself with lessons online. Since then, I fell in love with coding and often find my self forgeting time creating things by coding. I have learnt HTML, CSS and JavaScript and am eager to learn more to improve my skills.
              </p>
            </div>
        </div>
    </section>
  )
}