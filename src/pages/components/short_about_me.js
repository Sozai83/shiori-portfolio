import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/ShortAboutMe.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
function ShortAboutMe() {

  return (
    
    <section id="shortaboutme">
        <div className={Styles.wrapper}>
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
          <div className={Styles.descriptionWrapper}>
            <h2>
                A little about me...
            </h2>
            <div className={Styles.desciption}>
                I am an aspired junior software developer 
            </div>
            <div className={Styles.skills}>
                <h3>
                    Professional Skillset
                </h3>
                <div>
                    <span>HTML/CSS/JS</span>
                    <span>SASS</span>
                    <span>ReactJS</span>
                    <span>Node.js</span>
                    <span>JQuery</span>
                    <span>MySQL</span>
                </div>

                <h3>
                    Currently Learning
                </h3>
                <div>
                    <span>NextJS</span>
                    <span>Python</span>
                </div>
            </div>
            <button>
              Learn more about me
            </button>
          </div>
        </div>
    </section>
      

  )
}

export default withWaveSection(ShortAboutMe, '#D0D1D3', 'ivory');