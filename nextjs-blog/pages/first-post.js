import Link from "next/link";
import styles from '../styles/Home.module.css';
import Head from "next/head";
import Script from "next/script";


export default function FirstPost() {
    return (
    <div>
        <Head>
            <title>First Post title</title>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Head>
        <h1 className={styles.title}>First Post</h1> 
        <h2 className={styles.title}>
          Back to <Link href="/">home page!</Link>
        </h2>
    </div>    
    )
}