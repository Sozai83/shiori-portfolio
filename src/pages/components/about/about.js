import Image from 'next/image'
import Link from 'next/link'
import Introduction from './introduction'
import TechStack from './techstack'
import withWaveSection from '../../wavelayout'
import Styles from '../../../styles/about/about.module.scss'

function About() {
  return (
    <section className={Styles.wrapper}>
      <Introduction/>
      <TechStack/>
    </section>
  )
}

export default withWaveSection(About, '#EEEDE7', 'white');