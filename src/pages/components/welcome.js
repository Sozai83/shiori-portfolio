import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/Welcome.module.scss'

function Welcome({name}) {
    
    const tempName = name ? name : 'world';

  return (
    <>
    <div className={Styles.wrapper}>
    <section id="welcome">
    <h1>
         Hello {tempName}, my name is
    </h1>
    <h1 id="myName" className={Styles.myName}>
         Shiori Chiku
    </h1>
    <p>
        I'm a developer who likes to create things with code! 
    </p>
    <p>I am...</p>
    <p></p>

    </section>
    <figure>
        <img src="/chikku.png" alt="test" width="300" height="300"></img>
    </figure>
    </div>
    <Link href="#recentwork" className={Styles.next}><button>What Shiori can do?</button></Link>
    </>
  )
}

export default withWaveSection(Welcome, '#fff', 'ivory');