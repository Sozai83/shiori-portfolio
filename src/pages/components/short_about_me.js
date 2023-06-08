import Image from 'next/image'
import Link from 'next/link'
import {forwardRef} from 'react'
import Styles from '../../styles/home/ShortAboutMe.module.scss'

//Home page - Skills/Tech stack section
const ShortAboutMe = forwardRef(({}, ref) => {
  const resume = '/myresume2023.pdf';

  return (
    <section
      id="shortaboutme"
      ref={ref}
      className={`${Styles.bgcolor} ${Styles.topWrapper}`}
    >
      <section>
        <div className={Styles.wrapper}>
          <figure>
              <img
                src="/shiori_img.png"
                alt="Chikku Webdesign Logo"
                className={Styles.logo}
              />
          </figure>
          <div className={Styles.descriptionWrapper}>
            <h2>A little about me...</h2>
            <div className={Styles.desciption}>
              I am a passionated software divelopper who likes to create things with code.<br/>
              I enjoy the process of finding the solutions and creating an application.<br/>
              Based in Melbourne, Australia.
            </div>
            <div className={Styles.skills}>
              <h3>Professional Skillset</h3>
              <div>
                <span>HTML/CSS/JS</span>
                <span>SASS</span>
                <span>ReactJS</span>
                <span>Node.js</span>
                <span>JQuery</span>
                <span>MySQL</span>
              </div>

              <h3>Currently Learning</h3>
              <div>
                <span>NextJS</span>
                <span>Python</span>
              </div>
            </div>
            <div className={Styles.buttons}>
              <Link href="/about">
                <button>Learn more about me</button>
              </Link>
              <a href={resume} target="_blank" download>
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D0D1D3"
          fillOpacity="1"
          d="M0,64L34.3,96C68.6,128,137,192,206,186.7C274.3,181,343,107,411,90.7C480,75,549,117,617,149.3C685.7,181,754,203,823,208C891.4,213,960,203,1029,218.7C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
})

export default ShortAboutMe