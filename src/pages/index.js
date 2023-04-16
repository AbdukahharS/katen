import Head from 'next/head'
import Hero from '../components/home/Hero'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Katen - Minimal Blog</title>
        <meta name='description' content='Katen - Minimal Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </>
  )
}
