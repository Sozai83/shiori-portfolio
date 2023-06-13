import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../../styles/about/Introduction.module.scss'

export default function Introduction() {
  return (
            <section className={Styles.introduction} id="introduction">
              <h1>Hi There,</h1>
              <h1>Thanks again for visiting my portfolio!</h1>
              <h2>Here's a bit more about me...</h2>
              <section class={Styles.description}>
                <div>
                    <p>
                        I am a technical support specialist transitioning into the world of full-stack software development.<br/>
                        With experience in building dynamic, interactive web applications, 
                        I find seeing something come to life is one of the most satisfying things to achieve.<br/>
                        My passion for continuous learning drives me to expand my knowledge and engage in personal projects such as this website!
                    </p>
                    <br/>
                    <p>
                        With my freetime, I enojoy cooking, playing games and relax with some wines or beers.
                    </p>
                </div>
                <figure>
                <img
                    src="/shiori_img.png"
                    alt="Shiori stting by the lake"
                    className={Styles.logo}
                />
              </figure>
              </section>
            </section>
  )
}