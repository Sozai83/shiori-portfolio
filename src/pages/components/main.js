import Image from 'next/image'
import { useRouter } from "next/router"
import Nav from './nav'
import SideNav from './sidenav'
import Welcome from './welcome'
import RecentWork from './recentWork'
import ShortAboutMe from './short_about_me'
import Contact from './contact'
import Footer from '../footer'
import { Inter } from 'next/font/google'
import {useRef, useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  const welcome = useRef();
  const recentWork = useRef();
  const aboutMe = useRef();
  const contact = useRef();
  const nav = useRef();

  const router = useRouter();
  
  const [active, setActive] = useState('welcome');

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };


  useEffect(()=>{
    //set currentId as id in the URL or welcome
    const currentId = router.asPath.split("#")[1] || 'welcome';
    //set active section as id in the URL
    setActive(currentId);
  
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            const tempId = entry.target.id;
            setActive(tempId);
            if(tempId !== 'welcome'){
              window.history.replaceState(null, '', `/#${tempId}`);
            }else{
              window.history.replaceState(null, '', '');
            }
          }
      });
    }, options);
    observer.observe(welcome.current);
    observer.observe(recentWork.current);
    observer.observe(aboutMe.current);
    observer.observe(contact.current);
  },[])

  return (
    <>
    <Nav tempActive="topnav-home"/>
    <main ref={nav}>
        <SideNav 
          active={active}
          setActive={setActive}
        />
        <Welcome 
          ref={welcome}/>
        <RecentWork 
          ref={recentWork}/>
        <ShortAboutMe 
          ref={aboutMe}/>
        <Contact 
          ref={contact}/>
        <Footer/>
    </main>
    </>
  )
}
// Check this tomorrow
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://stackoverflow.com/questions/69566725/update-url-in-browser-while-scrolling-a-page-in-react