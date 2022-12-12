import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="Ninja List Website" />
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum omnis, animi cum perferendis, similique commodi fugit eos sequi maiores minima inventore dolorem dolore vitae quam. Ea quasi nihil nesciunt.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia delectus iste veniam sequi dolores inventore, placeat aliquid. Nulla dolores tenetur hic est nobis non at eum ipsam similique. Reprehenderit, provident!</p>
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
