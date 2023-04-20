import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Aside.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const posts = [
  {
    name: '3 Easy Ways To Make Your iPhone Faster',
    img: '/img/posts/aleksander-vlad-Jym19Ty9Dc4-unsplash-150x150.jpg',
    publishedAt: '13/03/2021',
  },
  {
    name: 'Facts About Business That Will Help You Success',
    img: '/img/posts/drop-the-label-movement-608463-unsplash-150x150.jpg',
    publishedAt: '13/03/2021',
  },
  {
    name: '15 Unheard Ways To Achieve Greater Walker',
    img: '/img/posts/matt-le-112706-unsplash-150x150.jpg',
    publishedAt: '13/03/2021',
  },
]

const Aside = () => {
  return (
    <aside className={styles.side}>
      <div className={`${styles.greeting} ${styles.wrapper}`}>
        <Image
          src='/img/map-bg.png'
          fill
          className={styles.bg}
          alt='Map'
          sizes='100%'
        />
        <Image
          alt='Katen'
          src='/img/logo.svg'
          width={118}
          height={26}
          className={styles.logo}
        />
        <p>
          Hello, We’re content writer who is fascinated by content fashion,
          celebrity and lifestyle. We helps clients bring the right content to
          the right people.
        </p>
        <div className={styles.mediaLinks}>
          <Link href='/'>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faPinterest} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>

      <div className={`${styles.posts} ${styles.wrapper}`}>
        <h3>Popular Posts</h3>
        <Image src='/img/wave.svg' width={33} height={6} alt='wave' />
        <div className={styles.container}>
          {posts.map((post, i) => (
            <Link href={`/post/${i}`} className={styles.post} key={i}>
              <div
                className={styles.img}
                style={{ backgroundImage: `url(${post.img})` }}
              >
                <div className={styles.place}>{i + 1}</div>
              </div>
              <h4>{post.name}</h4>
              <span>{post.publishedAt}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Aside
