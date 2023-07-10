import Image from 'next/image'
import Link from 'next/link'
import {forwardRef} from 'react'
import withWaveSection from '../wavelayout'
import Typewriter from 'typewriter-effect';
import Styles from '../../../styles/welcome/Welcome.module.scss'

const Welcome = forwardRef(({ name }, ref) => {
  const tempName = name ? name : "world";
  const shioriIdentifier = [
    'a web developer',
    'a problem solver',
    'a creator',
    'a challenger'
  ]

  return (
    <section id="welcome" ref={ref} className={`${Styles.bgcolor} ${Styles.topWrapper}`}>
      <div className={Styles.wrapper}>
        <section>
          <h1>Hello {tempName}, my name is</h1>
          <h1 id="myName" className={Styles.myName}>
            Shiori Chiku
          </h1>
          <p>I'm a developer who likes to create things with code!</p>
          <section className={Styles.typeWriter}>
          <p>I am</p>
            <Typewriter
              options={{
                strings: shioriIdentifier,
                autoStart: true,
                loop: true,
              }}
            />
          </section>
        </section>
        <figure>
          <img src="/chikku.png" alt="test" width="300" height="300"></img>
        </figure>
      </div>
      <Link href="#recentwork" className={Styles.next}>
        <button>What Shiori can do?</button>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L34.3,96C68.6,128,137,192,206,186.7C274.3,181,343,107,411,90.7C480,75,549,117,617,149.3C685.7,181,754,203,823,208C891.4,213,960,203,1029,218.7C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
});

export default Welcome;