import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xinmeng Li's Academic Webpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to check Xinmeng's status 
        </h1>

        

        <a className={styles.card2}>
            <p>  
              <img src="/xinmeng-oslo.jpg" alt="xinmeng oslo office" class="avatar" width="800">
               </img>
            </p>
        </a>


        <p className={styles.description}>
          <a href="mailto:xinmeng.li@kjemi.uio.no">Click here for my quick response email</a> 
        </p>

        <h4 className={styles.title}>
            <a href="https://weeknumber.net">
            Week 8
            </a>
        </h4>
        
 
        <div className={styles.grid2}>
          
          <a className={styles.card}>
            <h3>Every Week Meeting &rarr;</h3>
            <p>  
               <ul>
                 <li>Tuesday Morning</li>
                 <li>Thursday Morning</li>
               </ul>
            </p>

          </a>


          <a className={styles.card}>
            <h3> Occupied Meeting Time &rarr;</h3>
            <p>  
               <ul>
                 <li> Week 8: Friday 13:30 - 15:00 </li>
               </ul>
            </p>

          </a>

          <a className={styles.card} >
            <h3>Other Facts &rarr;</h3>
            <p>  
               <ul>
                 <li> Location: Oslo </li>
                 <li> Busy With: Nucleosome</li>
                 <li> Coding: Mildly </li>
                 <li> Sport: No </li>
                 <li> Mood: Fine </li>
                 <li> Meeting?: Yes </li>
               </ul>
            </p>
          </a>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.researchgate.net/profile/Xinmeng-Li"
          target="_blank"
          rel="noopener noreferrer"
        >
          see more details in {' '}
          <img src="https://c5.rgstatic.net/m/41542880220916/images/favicon/favicon-32x32.png" alt="ResarchGate" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
