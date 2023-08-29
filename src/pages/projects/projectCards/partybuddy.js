import Image from "next/image";
import Link from "next/link";
import Styles from "../../../styles/projects/projectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function PartyBuddy() {
  return (
    <section className={Styles.projectCardWrapper}>
      <figure>
        <Link href="https://party-buddy.vercel.app/">
          <Image
            src="/projects_img/PartyBuddy_Top.JPG"
            alt="Chiscord Sample Image"
            className={Styles.logo}
            width={440}
            height={400}
          />
        </Link>
      </figure>
      <section className={Styles.descriptionWrapper}>
        <h2>Party Buddy</h2>
        <h3>2023 August</h3>
        <div className={Styles.desciption}>
          <p>
            Utilizing
            <Link href="https://www.thecocktaildb.com/api.php">
              TheCocktailDB API
            </Link>
            , I created a web application give users an idea of a cocktail to
            make. It also gives user an ability to filter with a major liquor
            that they have in their pantry.
          </p>
        </div>
        <div className={Styles.techStacks}>
          <span>HTML</span>
          <span>SCSS</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>API</span>
        </div>
        <div className={Styles.outsideLinks}>
          <a
            target="_blank"
            href="https://github.com/Sozai83/Project5_PartyBuddy"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a target="_blank" href="https://party-buddy.vercel.app/">
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
