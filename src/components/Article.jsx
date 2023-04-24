import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faComment,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/components/Article.module.scss'
import {
  faFacebookF,
  faLinkedin,
  faPinterest,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Article = () => {
  return (
    <article className={styles.article}>
      <Link href={'/post/1'} className={styles.imgContainer}>
        <Image src='/img/posts/post1.jpg' fill alt='Article' />
      </Link>
      <div className={styles.publish}>
        <Image
          src='/img/authors/nick-arnot-321267-unsplash-48x48.jpg'
          width={32}
          height={32}
          alt='Katen Doe'
        />
        <Link href='/author/1'>Katen Doe</Link>
        <div className={styles.dot}></div>
        <span>August 30, 2022</span>
        <div className={styles.dot}></div>
        <span>
          <FontAwesomeIcon icon={faComment} />
          (0)
        </span>
      </div>
      <div className={styles.body}>
        <Link href={'/post/1'}>How To Learn Everything About Construction</Link>
        <p>
          The European languages are members of the same family. Their separate
          existence is a myth. For science, music, sport, etc, Europe uses the
          same vocabulary. The languages only differ in their…
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.socialMedia}>
          <Link href='/'>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faPinterest} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faTelegram} />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
        <Link href='/' className={styles.continue}>
          Continue reading <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <Link href='/category/1' className={styles.category}>
        <span>Culture</span>
      </Link>
    </article>
  )
}

export default Article
