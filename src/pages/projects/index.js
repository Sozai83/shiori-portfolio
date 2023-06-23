import Image from 'next/image'
import Nav from '../components/nav'
import Footer from '../footer'
import BraveBlossomsCard from './projectCards/bravebrossoms'
import Styles from '../../styles/projects/projectTop.module.scss'

export default function Main() {
  return (
    <>
    <Nav tempActive="topnav-home"/>
    <main className={Styles.projectTop}>
      <BraveBlossomsCard/>
    </main>
    <Footer/>
    </>
  )
}
