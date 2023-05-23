import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../footer'
import withWaveSection from '../wavelayout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Styles from '../../styles/projects/projectdetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

//Home page - Skills/Tech stack section
function projectCards() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main>
      <section className={Styles.projetDetails}>
        <section className={Styles.top}>
          <h1>BraveBlossoms Portal</h1>
          <h3>2023 March</h3>
          <section className={Styles.outsideLinks}>
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
          </section>
          <figure>
            <img
              src="/projects_img/Braveblossom_Top.JPG"
              alt="Chikku Webdesign Logo"
              className={Styles.logo}
            />
          </figure>
          <section className={Styles.topDesciption}>
            <p>
              This is a single page web application built with React.js.
              <br />
              Since hosting the Rugby World Cup in 2019, the growing audience is
              diverse so I wanted to design a website which any fan, new or
              seasoned, young or old, can use to learn more about The Brave
              Blossoms my home team.
            </p>
          </section>
        </section>
        <div className={Styles.wrapper}>
          <figure>
            <img
              src="/projects_img/Braveblossom_Details/planning.jpg"
              alt="Chikku Webdesign Logo"
              className={Styles.logo}
            />
            <a href="https://www.freepik.com/free-vector/time-management-concept-illustration_6263624.htm#from_view=detail_author">
              Image by storyset
            </a>{" "}
            on Freepik
          </figure>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
              <h2>01. Design/Planning</h2>
              <h3>Creating personas, user stories</h3>
              <Slider {...settings}>
                <div>
                  <img
                    src="/projects_img/Braveblossom_Details/persona1.png"
                    alt="Bravablossoms Portal Persona 1"
                  />
                </div>
                <div>
                  <img
                    src="/projects_img/Braveblossom_Details/persona2.png"
                    alt="Bravablossoms Portal Persona 2"
                  />
                </div>
                <div>
                  <img
                    src="/projects_img/Braveblossom_Details/persona3.png"
                    alt="Bravablossoms Portal Persona 3"
                  />
                </div>
                <div>
                  <img
                    src="/projects_img/Braveblossom_Details/persona4.png"
                    alt="Bravablossoms Portal Persona 4"
                  />
                </div>
              </Slider>
              <h3>Tools used:</h3>
              <ul>
                <li>Jira: Project Management</li>
                <li>Miro: Creating prototype</li>
                <li>Adobe Colors: Designining</li>
                <li>Adobe Express: Creating personas</li>
              </ul>
            </div>
          </section>
        </div>
        <div className={Styles.wrapper}>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
              <h2>02. Developing</h2>
              <p>It was the most fun part!<br/>
              Seeing what I planned becoming an actual application is so satisfying 😀
              </p>
              <div className={Styles.techStacks}>
                <h4>Main Laguages:</h4>
                <ul>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>ReactJS</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <h3>Tools used:</h3>
              <ul>
                <li>Jira: Project Management</li>
                <li>VSCode: Develop application</li>
                <li>Github: Version Control</li>
              </ul>
            </div>
          </section>
          <figure>
            <a
              target="_blank"
              href="https://brave-blossoms-portal.netlify.app/"
            >
              <img
                src="/projects_img/Braveblossom_Details/developping.jpg"
                alt="Chikku Webdesign Logo"
                className={Styles.logo}
              />
            </a>
            <a href="https://www.freepik.com/free-vector/startup-life-concept-illustration_7117748.htm#query=development&position=17&from_view=search&track=sph">
              Image by storyset
            </a>{" "}
            on Freepik
          </figure>
        </div>
        <div className={Styles.wrapper}>
          <figure>
            <img
              src="/projects_img/Braveblossom_Details/testing.jpg"
              alt="Chikku Webdesign Logo"
              className={Styles.logo}
            />
            Image by <a href="https://www.freepik.com/free-vector/woman-checking-giant-check-list_4105860.htm#query=testing&position=1&from_view=search&track=sph">Freepik</a>
          </figure>
          <section className={Styles.desciption}>
            <div className={Styles.descriptionWrapper}>
              <h2>03. Deployment</h2>
              <p>
                Before deploying the web application to production, I conducted both manual/automated testing.<br/>
                Bugs found in this phase has been fixed and added some enhancement ideas for future development.
              </p>

              <h3>Tools used:</h3>
              <ul>
                <li>Github: Version Control</li>
                <li>Jest: Automated testing</li>
                <li>Netlify: Deployment</li>
              </ul>
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
          <a
            target="_blank"
            href="https://docs.google.com/document/d/e/2PACX-1vT_6Fj8DalLFWWQXFdMhtP2acERQMAz_ebe5Hdyc60AcCpMiJVPdDO-_YBA7m2sDDGDKsXheRyYivjj/pub"
          >
            <button>See full report on how it's designed</button>
          </a>
          <Link href="/projects">
            <button>Check other projects</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const BraveBlossomsWave = withWaveSection(projectCards, '#EEEDE7', 'white');

export default function BraveBrossoms(){
  return (
    <>
      <Nav tempActive="topnav-projects"/>
      <BraveBlossomsWave/>
      <Footer bgcolor="ivory"/>
    </>

  )
}