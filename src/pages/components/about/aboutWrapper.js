import Image from 'next/image'
import Link from 'next/link'
import Introduction from './introduction'
import TechStack from './techstack'
import Styles from '../../../styles/about/about.module.scss'

export default function About() {
  return (
    <section className={Styles.wrapper}>
      <Introduction/>
      <TechStack/>
    </section>
  )
}