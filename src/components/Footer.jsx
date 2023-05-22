import Link from 'next/link'

const feeds = [
  {
    img: '301425688_744703056634861_5933301700705032819_nlow.jpg',
    link: 'https://instagram.com',
  },
  {
    img: '301546930_743515823375636_3989247944788702757_nlow.jpg',
    link: 'https://instagram.com',
  },
  {
    img: '301571069_803159457494173_7737856925578895291_nlow.jpg',
    link: 'https://instagram.com',
  },
  {
    img: '301678678_747957199832982_4165207138856145913_nlow.jpg',
    link: 'https://instagram.com',
  },
  {
    img: '301752884_178348868018523_6224027500536963240_nlow.jpg',
    link: 'https://instagram.com',
  },
  {
    img: '301781714_177980094732169_3092612810000707216_nlow.jpg',
    link: 'https://instagram.com',
  },
]

const Footer = () => {
  return (
    <footer>
      <div className='feeds'>
        <Link className='instaPage' href='https://instagram.com'>
          @Katen on Instagram
        </Link>
        {feeds.map((feed, i) => (
          <Link
            className='feed'
            key={i}
            href={feed.link}
            style={{ backgroundImage: `url('/img/${feed.img}')` }}
          ></Link>
        ))}
      </div>
      <div></div>
    </footer>
  )
}

export default Footer
