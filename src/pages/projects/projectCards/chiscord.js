import Image from "next/image";
import Link from "next/link";
import Styles from "../../../styles/projects/projectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function BraveBlossomsCard() {
  return (
    <section className={Styles.projectCardWrapper}>
      <figure>
        <Link href="https://chiscord.vercel.app/">
          <Image
            src="/projects_img/Chiscord_Sample.png"
            alt="Chiscord Sample Image"
            className={Styles.logo}
            width={440}
            height={400}
          />
        </Link>
      </figure>
      <section className={Styles.descriptionWrapper}>
        <h2>Chiscord - Discord Clone</h2>
        <h3>2023 July</h3>
        <div className={Styles.desciption}>
          <p>
            Using firebase, I created an application that shows realtime data.
            (Cloned Discord)
            <br />
            Users can login to the application using their Google account. Once
            you login, you can create channel, add comments and see other
            comments in each channel.
          </p>
        </div>
        <div className={Styles.techStacks}>
          <span>HTML</span>
          <span>SCSS</span>
          <span>TypeScript</span>
          <span>Redux</span>
          <span>Firebase</span>
        </div>
        <div className={Styles.outsideLinks}>
          <a target="_blank" href="https://github.com/Sozai83/chiscord">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a target="_blank" href="https://chiscord.vercel.app/">
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
