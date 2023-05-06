import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/RecentWork.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
function RecentWork() {

  return (
    
    <section id="recentwork">
        <div className={Styles.wrapper}>
          <div className={Styles.descriptionWrapper}>
            <h2>
              Recent Work
            </h2>
            <h1>
              BraveBlossoms Portal
            </h1>
            <h3>
              2023 March
            </h3>
            <div className={Styles.desciption}>
              A single page web application where people can learn more about the Japan national  
            </div>
            <div className={Styles.techStacks}>
              <span>HTML</span>
              <span>SCSS</span>
              <span>ReactJS</span>
            </div>
            <div className={Styles.outsideLinks}>
              <Link href=""><FontAwesomeIcon icon={faGithubSquare} /></Link>
              <Link href=""><FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>
            </div>
            <button>
              See Project
            </button>
          </div>
          <figure>
            <Link href="">
              <Image  src='/projects_img/Braveblossom_Top.JPG' 
                      alt="Chikku Webdesign Logo" 
                      className={Styles.logo} 
                      width={440}
                      height={400}
              />
            </Link>
          </figure>
        </div>
    </section>
      

  )
}

export default withWaveSection(RecentWork, '#EEEDE7', 'white');