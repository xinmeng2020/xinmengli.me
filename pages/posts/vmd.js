import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'


export default function VmdPost() {

 
  return(

     <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vmd tips </title>
      </Head>

      <main className={styles.main}>

    
          <h1 className={styles.title}>
            VMD tips
          </h1>
          

        

    
        

        <div className={styles.grid}>   
          

           <a className={styles.card}>
            <h3> tcl commands for drawring: </h3>
            <p>  
               <ul>
                 <li> Isosurface:  <code>  mol repID  molID  Isosurface  Isovalue VolID Show(0-2) Draw(0-3) </code>   </li>
               </ul>
            </p>
            </a>

       

        </div>
        
         <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
            

        </main>
    </div>
        
    
  )


}

