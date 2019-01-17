import React from 'react'
import logo from './footer-assets/logo.png'
import iconFlag from './footer-assets/brazil-flag.png'
import iconMail from './footer-assets/mail-icon.png'
import iconFacebook from './footer-assets/icons-facebook.svg'
import iconTweeter from './footer-assets/icons-tweeter.svg'
import iconInstagram from './footer-assets/icons-instagram.svg'
import iconLinkedIn from './footer-assets/icons-linkedin.svg'
import iconYoutube from './footer-assets/icons-youtube.svg'
import './footer.css'

const Footer = (props) => (
    <footer className='footer'>

        <div className='footer__box-logo'>
            <img className='footer__logo' src={logo} alt='MaxMilhas'/>
        </div>

        <div className='footer__box-contact'>
            <ul className='footer__list'>
                <li className='footer__list-links'>
                    <a href='http://www.maxmilhas.com.br'><img className='footer__icons' src={iconFlag} alt='brazilian flag'/>www.maxmilhas.com.br</a>
                </li>

                <li className='footer__list-links'>
                    <a href='#'><img className='footer__icons' src={iconMail} alt='mail icon'/>contato@maxmilhas.com.br</a>
                </li>
            </ul>
        </div>

        <div className='footer__box-media'>
            <p className='footer__title-media' >Siga a MaxMilhas</p>

            <ul className='footer__links-media'>

                <li className='footer__list-links-media'>
                    <a href='https://www.facebook.com/MaxMilhas/'><img className='footer__list-links-media-item' src={iconFacebook} alt='facebook icon'/></a>
                </li>

                <li className='footer__list-links-media'>
                    <a href='https://twitter.com/maxmilhas'><img className='footer__list-links-media-item' src={iconTweeter} alt='tweeter icon'/></a>
                </li>

                <li className='footer__list-links-media'>
                    <a href='https://www.instagram.com/maxmilhas/'><img className='footer__list-links-media-item' src={iconInstagram} alt='instagram icon'/></a>
                </li>

                <li className='footer__list-links-media'>
                    <a href='https://www.linkedin.com/company/max-milhas'><img className='footer__list-links-media-item' src={iconLinkedIn} alt='linkedin icon'/></a>
                </li>

                <li className='footer__list-links-media'>
                    <a href='https://www.youtube.com/user/canalmaxmilhas'><img className='footer__list-links-media-item' src={iconYoutube} alt='youtube icon'/></a>
                </li>
            </ul>
        </div>
        

    </footer>
)

export default Footer