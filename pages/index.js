import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Xinmeng Li's Update</title>
	      <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Thx for checking my status 
        </h1>

        

        <a className={styles.card2}>
            <p>  
              <img src="/xinmeng-oslo.jpg" alt="xinmeng oslo office" class="avatar" width="360">
               </img>
            </p>
        </a>


        <p className={styles.description}>
          <a href="mailto:xinmeng.li@kjemi.uio.no">Click here for my email</a> 
        </p>

        <p className={styles.code}>
          <a> updated: 25-Feb-2021 </a> 
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
                 <li> <strike> Week 8: Fri. 13:30 - 15:00 </strike> <a className={styles.code}> Cancelled </a>  </li>
                 <li> Week 9: Mon. 13:30 - 14:30  <a className={styles.code}> Leiden </a> 
                 </li>
              
               </ul>
            </p>

          </a>

          <a className={styles.card} >
            <h3>Other Status &rarr;</h3>
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
      <ul>

        <a
          href="https://www.researchgate.net/profile/Xinmeng-Li"
          target="_blank"
          rel="noopener noreferrer"
        >
          see more details in {' '}
          <img src="https://c5.rgstatic.net/m/41542880220916/images/favicon/favicon-32x32.png" alt="ResarchGate" className={styles.logo} />
        </a>

        <p className={styles.logo}>
         <a href='https://www.counter12.com'>
         <img src='https://www.counter12.com/img-zZ58c910xBW9yZ7d-50.gif' border='0' alt='free web counter'>
         </img>
         </a>
         <script type='text/javascript' src='https://www.counter12.com/ad.js?id=zZ58c910xBW9yZ7d'>
         </script> 
       </p>

         
      </ul>
      </footer>

      

    </div>

  )
}
