import Head from 'next/head'
import Image from 'next/image'
import Main from './components/welcome/main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shiori Chiku Portfolio</title>
        <meta name="description" content="Shiori Chiku's portfolio page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chikku.png" />
      </Head>
      <Main/>
    </>
  )
}
