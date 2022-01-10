import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.chonkstruction}>
      <Head>
        <title>Under Chonkstruction</title>
        <meta name="description" content="Chonks NFT are currently under chonkstruction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.copy_container}>
          <div className={styles.copy}>
            <h2 className={styles.copy_under}>Under</h2>
            <h1 className={styles.copy_chonkstruction}><span>Chonk</span>struction</h1>
            <div className={styles.tape}>
              <img alt="construction tape" src="/img/arrow.gif" height="30" />
            </div>
          </div>
        </div>
        <div className={styles.chonk_container}>
          <img className={styles.shatter} alt="shatter" src="/img/shatter.svg" />
          <video className={styles.chonk_vid} src="/vid/chonk.mp4" muted loop autoPlay />
        </div>
      </main>
    </div>
  )
}

export default Home
