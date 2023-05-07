import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../footer'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/RecentWork.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
function projectCards() {
  return (
    <main>
      <section>
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
          <div className={Styles.descriptionWrapper}>
            <h1>
              BraveBlossoms Portal
            </h1>
            <h3>
              2023 March
            </h3>
            <div className={Styles.desciption}>
              <p>
                This is a single page web application.<br/>
                Since hosting the Rugby World Cup in 2019, the growing audience is diverse so I wanted to design a website which any fan, new or seasoned, young or old, can use to learn more about The Brave Blossoms my home team.
              </p>
              </div>
            <div className={Styles.techStacks}>
              <span>HTML</span>
              <span>SCSS</span>
              <span>ReactJS</span>
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
          </div>
        </div>
      </section>
    </main>

  )
}

const BraveBlossomsWave = withWaveSection(projectCards, '#EEEDE7', 'white', 'recentwork');

export default function BraveBrossoms(){
  return (
    <>
      <Nav tempActive="topnav-projects"/>
      <BraveBlossomsWave/>
      <Footer/>
    </>

  )
}