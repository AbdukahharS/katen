import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnglesLeft,
  faAngleLeft,
  faAnglesRight,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/components/Pagination.module.scss'
import Link from 'next/link'

const totalPages = 7

const Pagination = () => {
  const router = useRouter()
  const pageNumber = Number(router.query.number || 1)
  const [pages, setPages] = useState([])
  console.log(pages)

  useEffect(() => {
    if (totalPages === 1) {
      setPages([1])
    } else if (pageNumber === 1) {
      setPages(() => {
        const n = []
        for (let i = 1; i <= totalPages; i++) {
          if (i > 3) break
          n.push(i)
        }
        return n
      })
    } else if (pageNumber === totalPages) {
      setPages(() => {
        const n = []
        for (let i = totalPages; i >= 1; i--) {
          if (i === totalPages - 3) break
          n.unshift(i)
        }
        return n
      })
    } else {
      setPages([pageNumber - 1, pageNumber, pageNumber + 1])
    }
  }, [pageNumber])

  return (
    <article className={styles.container}>
      <Link
        href={`/page/${1}`}
        style={pageNumber === 1 || totalPages === 1 ? { display: 'none' } : {}}
        title='First page'
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </Link>
      <Link
        href={`/page/${pageNumber - 1}`}
        style={pageNumber === 1 || totalPages === 1 ? { display: 'none' } : {}}
        title='Previous page'
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
      {pages.map((page, i) => (
        <Link
          key={i}
          href={page === 1 ? '/' : `/page/${page}`}
          className={page === pageNumber ? styles.active : ''}
        >
          {page}
        </Link>
      ))}
      <Link
        href={`/page/${pageNumber + 1}`}
        style={
          pageNumber === totalPages || totalPages === 1
            ? { display: 'none' }
            : {}
        }
        title='Next page'
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      <Link
        href={`/page/${totalPages}`}
        style={
          pageNumber === totalPages || totalPages === 1
            ? { display: 'none' }
            : {}
        }
        title='Last page'
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </Link>
    </article>
  )
}

export default Pagination
