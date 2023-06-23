import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../../styles/projects/projectCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

export default function BraveBlossomsCard() {
  return (
    <section className={Styles.projectCardWrapper}>
        <figure>
          <Link href="/projects/bravebrossoms">
            <Image
              src="/projects_img/Braveblossom_Top.JPG"
              alt="Brave Blossom Top Page Sample Image"
              className={Styles.logo}
              width={440}
              height={400}
            />
          </Link>
        </figure>
        <section className={Styles.descriptionWrapper}>
            <h2>BraveBlossoms Portal</h2>
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
          </div>
        </section>
    </section>
  )
}
