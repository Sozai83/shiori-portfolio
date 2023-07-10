import Image from 'next/image'
import Link from 'next/link'
import {forwardRef} from 'react'
import withWaveSection from '../wavelayout'
import Styles from '../../../styles/welcome/RecentWork.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
const RecentWork = forwardRef(({}, ref) => {

  return (
    <section
      id="recentwork"
      ref={ref}
      className={`${Styles.bgcolor} ${Styles.topWrapper}`}
    >
      <div className={Styles.wrapper}>
        <div className={Styles.descriptionWrapper}>
          <h2>Recent Work</h2>
          <h1>BraveBlossoms Portal</h1>
          <h3>2023 March</h3>
          <div className={Styles.desciption}>
            <p>
              This is a single page web application.
              <br />
              Since hosting the Rugby World Cup in 2019, the growing audience is
              diverse so I wanted to design a website which any fan, new or
              seasoned, young or old, can use to learn more about The Brave
              Blossoms my home team.
            </p>
          </div>
          <div className={Styles.techStacks}>
            <span>HTML</span>
            <span>SCSS</span>
            <span>ReactJS</span>
          </div>
          <div className={Styles.outsideLinks}>
            <a
              target="_blank"
              href="https://github.com/Sozai83/COS60015-Assignment2v2"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
              target="_blank"
              href="https://brave-blossoms-portal.netlify.app/"
            >
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
          <div className={Styles.buttons}>
            <Link href="/projects/bravebrossoms">
              <button>See Project details</button>
            </Link>
            <Link href="/projects">
              <button>Check other projects</button>
            </Link>
          </div>
        </div>
        <figure>
          <Link href="/projects">
            <Image
              src="/projects_img/Braveblossom_Top.JPG"
              alt="Brave Blossom Top Page Sample Image"
              className={Styles.logo}
              width={440}
              height={400}
            />
          </Link>
        </figure>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EEEDE7"
          fillOpacity="1"
          d="M0,64L34.3,96C68.6,128,137,192,206,186.7C274.3,181,343,107,411,90.7C480,75,549,117,617,149.3C685.7,181,754,203,823,208C891.4,213,960,203,1029,218.7C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
})

export default RecentWork