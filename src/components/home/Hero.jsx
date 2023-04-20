import { useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    categories: ['Politic'],
    img: '/img/matt-le-112706-unsplash-1140x540.jpg',
    name: '15 ways to achieve Greater Walker',
    author: 'Katen Doe',
    publishedAt: '4/16/2023',
  },
  {
    categories: ['Development'],
    img: '/img/david-van-dijk-255503-unsplash-1140x540.jpg',
    name: 'Your light is about to stop being relevant',
    author: 'Katen Doe',
    publishedAt: '5/26/2022',
  },
]

const Hero = () => {
  const [selectedId, setSelectedId] = useState(0)

  const prev = () => {
    const num = selectedId - 1

    if (num < 0) {
      setSelectedId(slides.length - 1)
    } else {
      setSelectedId(num)
    }
  }

  const next = () => {
    const num = selectedId + 1

    if (num > slides.length - 1) {
      setSelectedId(0)
    } else {
      setSelectedId(num)
    }
  }

  return (
    <section>
      <div className='slider'>
        <div className='slide-wrapper'>
          {slides.map((slide, i) => (
            <div className={`slide ${i === selectedId && 'active'}`} key={i}>
              <Image
                src={slide.img}
                priority={i === 0}
                layout='fill'
                alt={slide.name}
              />
              <Link className='cover' href={`/blog/${slide.name}`}></Link>

              <div className='data'>
                <div className='categories'>
                  {slide.categories.map((category, j) => (
                    <Link href='/' key={i}>
                      <span>{category}</span>
                    </Link>
                  ))}
                </div>
                <p>{slide.name}</p>
                <div className='publish'>
                  <span>{slide.author}</span>
                  <span className='dot'></span>
                  <span>{slide.publishedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='arrows'>
          <button className='left' onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className='right' onClick={next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className='dots'>
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setSelectedId(i)}
              className={i === selectedId ? 'selected' : ''}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
