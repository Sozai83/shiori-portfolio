import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/Skills.module.scss'

function Welcome() {

  return (
    <div className={Styles.wrapper}>
    <section id="skills">
    <h1>
        Tech Stacks
    </h1>
    </section>
    </div>
  )
}

export default withWaveSection(Welcome, '#fff');