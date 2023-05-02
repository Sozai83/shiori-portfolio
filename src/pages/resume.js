import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Styles from '../styles/Resume.module.scss'

export default function Resume() {
    const resume = '/myresume2023.pdf';
  return (
    <>
        <Nav/>
        <section className={Styles.resume}>
            
            <div className={Styles.wrapper}>
            <h1>Resume</h1>
                <a href={resume} target="_blank" download><button>Click here to download CV</button></a>
                <Document file={resume}>
                    <Page pageIndex={0}/>
                    <Page pageIndex={1}/>
                    <Page pageIndex={2}/>
                </Document>
                <a href={resume} target="_blank" download><button>Click here to download CV</button></a>
            </div> 
        </section>
    </>

  )
}