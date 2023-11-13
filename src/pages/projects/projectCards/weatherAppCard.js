import Image from "next/image";
import Link from "next/link";
import Styles from "../../../styles/projects/projectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function weatherAppCard() {
  return (
    <section className={Styles.projectCardWrapper}>
      <figure>
        <Link href="https://souzai83.pythonanywhere.com/">
          <Image
            src="/projects_img/Weather_Top.JPG"
            alt="Image of Weather Application Top Page"
            className={Styles.logo}
            width={440}
            height={400}
          />
        </Link>
      </figure>
      <section className={Styles.descriptionWrapper}>
        <h2>Weather Application</h2>
        <h3>2023 November</h3>
        <div className={Styles.desciption}>
          <p>
            The application aims to assist travel bloggers in checking the
            weather conditions for various locations during both the planning
            phase and throughout their travels.
          </p>
          <br />
          <p>
            Using Flask framework facilitated a smooth integration with the
            frontend, allowing for the dynamic data presentation seen in the
            application I have programmed.
          </p>
        </div>
        <div className={Styles.techStacks}>
          <span>Python</span>
          <span>Flask</span>
          <span>API</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className={Styles.outsideLinks}>
          <a target="_blank" href="https://github.com/Sozai83/Weather_app">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a target="_blank" href="https://souzai83.pythonanywhere.com/">
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </div>
        {/* <div className={Styles.buttons}>
          <Link href="/projects/bravebrossoms">
            <button>See Project details</button>
          </Link>
        </div> */}
      </section>
    </section>
  );
}
