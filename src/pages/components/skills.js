import Image from 'next/image'
import Link from 'next/link'
import withWaveSection from '../wavelayout'
import Styles from '../../styles/home/Skills.module.scss'

//Home page - Skills/Tech stack section
function Skills() {

  return (
    
    <section id="skills">
        <div className={Styles.wrapper}>
          <h1>
              Show case what I can do
          </h1>
          

          
        </div>
    </section>
      

  )
}

export default withWaveSection(Skills, '#D0D1D3', 'white');