import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterest, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header>
            <Image src='/logo.svg' width={118} height={26} />
            <div className='sm-links'>
                <Link href='facebook.com'><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link href='twitter.com'><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link href='instagram.com'><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href='pinterest.com'><FontAwesomeIcon icon={faPinterest} /></Link>
                <Link href='tiktok.com'><FontAwesomeIcon icon={faTiktok} /></Link>
                <Link href='youtube.com'><FontAwesomeIcon icon={faYoutube} /></Link>
            </div>
        </header>
    )
}

export default Header