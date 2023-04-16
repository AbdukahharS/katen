import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faMagnifyingGlass,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <div className='link-container'>
          <Link href='/' className='active'>
            Home
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <div className='dropdown'>
            <Link href='/'>Magazine</Link>
            <Link href='/'>Personal</Link>
            <Link href='/'>Personal Alt</Link>
            <Link href='/'>Classic</Link>
            <Link href='/'>Minimal</Link>
          </div>
        </div>
        <div className='link-container'>
          <Link href='/lifetyle'>Lifestyle</Link>
        </div>
        <div className='link-container'>
          <Link href='/culture'>Culture</Link>
        </div>
        <div className='link-container'>
          <Link href='/culture'>
            Features
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <div className='dropdown'>
            <Link href='/'>Magazine</Link>
            <Link href='/'>Personal</Link>
            <Link href='/'>Personal Alt</Link>
            <Link href='/'>Classic</Link>
            <Link href='/'>Minimal</Link>
          </div>
        </div>
        <div className='link-container'>
          <Link href='/culture'>
            Shop
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <div className='dropdown'>
            <Link href='/'>Magazine</Link>
            <Link href='/'>Personal</Link>
            <Link href='/'>Personal Alt</Link>
            <Link href='/'>Classic</Link>
            <Link href='/'>Minimal</Link>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <Link href='/'>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </Link>
        <Link href='/'>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
