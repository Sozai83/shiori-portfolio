import Image from 'next/image'
import Link from 'next/link'
import Styles from '../../../styles/about/TechStack.module.scss'

export default function TechStack() {
  return (
            <section className={Styles.techStack}>
              <h2>My TechStack</h2>
              <ul>
                <li>HTML/CSS</li>
                <li>CSS/SASS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>RestAPI</li>
                <il>MySQL</il>
              </ul>
              <h3>Currently Learning</h3>
              <ul>
                <li>NextJS</li>
                <li>Python</li>  
              </ul>
            </section>
  )
}