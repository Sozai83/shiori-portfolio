import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/Welcome.module.scss'

function Welcome({name}) {
    
    const tempName = name ? name : 'world';

  return (
    <>
    <div className={Styles.wrapper}>
    <section id="introduction">
    <h1>
         Hello {tempName}, my name is
    </h1>
    <h1 id="myName">
         Shiori Chiku
    </h1>
    <p>
        I'm a developer who likes to create things with code! 
    </p>
    <p>I am...</p>

    </section>
    <figure>
        <img src="/chikku.png" alt="test" width="300" height="300"></img>
    </figure>
    </div>
    <Link href="" className={Styles.next}><button>Exprole Shiori's Work!</button></Link>
    </>
  )
}

export default withWaveSection(Welcome, '#fff');