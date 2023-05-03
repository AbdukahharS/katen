import Head from 'next/head'
import Hero from '../components/home/Hero'
import Aside from '@/components/Aside'
import styles from '@/styles/Home.module.scss'
import Article from '@/components/Article'
import Pagination from '@/components/Pagination'

export default function Home() {
  return (
    <>
      <Head>
        <title>Katen - Minimal Blog</title>
        <meta name='description' content='Katen - Minimal Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <Hero />
      <section className={styles.container}>
        <main className={styles.main}>
          <div className={styles.articles}>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <Pagination />
        </main>
        <Aside />
      </section>
    </>
  )
}
