import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../footer'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/projects/projectdetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
function projectCards() {
  return (
    <main>
      <section className={Styles.projetDetails}>
        <section className ={Styles.top}>
          <h1>
            BraveBlossoms Portal
          </h1>
          <h3>
            2023 March
          </h3>
          <section className={Styles.outsideLinks}>
            <a target="_blank" href="https://github.com/Sozai83">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a target="_blank" href="https://brave-blossoms-portal.netlify.app/">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </section>
          <section className={Styles.topDesciption}>
            <p>
              This is a single page web application built with React.js.<br/>
              Since hosting the Rugby World Cup in 2019, the growing audience is diverse so I wanted to design a website which any fan, new or seasoned, young or old, can use to learn more about The Brave Blossoms my home team.
            </p>
          </section>
        </section>
        <div className={Styles.wrapper}>
          <figure>
            <a target="_blank" href="https://brave-blossoms-portal.netlify.app/">
              <Image  src='/projects_img/Braveblossom_Top.JPG' 
                      alt="Chikku Webdesign Logo" 
                      className={Styles.logo} 
                      width={440}
                      height={400}
              />
            </a>
          </figure>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
                <h2>01. Design/Planning</h2>
                <h3>Creating personas, user stories</h3>
                <p>
                  I created four personas with different genders and ages since the audience is diverse,
                  and based on that, I came up with features they would appreciate and created user stories.
                </p>
                <h3>Project planning</h3>

                <div className={Styles.buttons}>
          <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vT_6Fj8DalLFWWQXFdMhtP2acERQMAz_ebe5Hdyc60AcCpMiJVPdDO-_YBA7m2sDDGDKsXheRyYivjj/pub">
            <button>
              See full report on how it's designed
            </button>
          </a>
        </div>
            </div>
          </section>
        </div>
        <div className={Styles.wrapper}>
          <figure>
            <a target="_blank" href="https://brave-blossoms-portal.netlify.app/">
              <Image  src='/projects_img/Braveblossom_Top.JPG' 
                      alt="Chikku Webdesign Logo" 
                      className={Styles.logo} 
                      width={440}
                      height={400}
              />
            </a>
          </figure>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
              <h2>02. Developing</h2>     
                <div className={Styles.techStacks}>
                  <h4>Tech Stack</h4>
                  <span>HTML</span>
                  <span>SCSS</span>
                  <span>ReactJS</span>
                </div>      
            </div>
          </section>
        </div>
        <div className={Styles.wrapper}>
          <figure>
            <a target="_blank" href="https://brave-blossoms-portal.netlify.app/">
              <Image  src='/projects_img/Braveblossom_Top.JPG' 
                      alt="Chikku Webdesign Logo" 
                      className={Styles.logo} 
                      width={440}
                      height={400}
              />
            </a>
          </figure>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
                <h2>01. Design/Planning</h2>
                <p>
                  This is a single page web application.<br/>
                  Since hosting the Rugby World Cup in 2019, the growing audience is diverse so I wanted to design a website which any fan, new or seasoned, young or old, can use to learn more about The Brave Blossoms my home team.
                </p>
            </div>
          </section>
        </div>
        <div className={Styles.outsideLinks}>
              <a target="_blank" href="https://github.com/Sozai83">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a target="_blank" href="https://brave-blossoms-portal.netlify.app/">
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </a>
        </div>
        <div className={Styles.buttons}>
          <Link href="/projects">
            <button>
              Check other projects
            </button>
          </Link>
        </div>
      </section>
    </main>

  )
}

const BraveBlossomsWave = withWaveSection(projectCards, '#EEEDE7', 'white');

export default function BraveBrossoms(){
  return (
    <>
      <Nav tempActive="topnav-projects"/>
      <BraveBlossomsWave/>
      <Footer/>
    </>

  )
}