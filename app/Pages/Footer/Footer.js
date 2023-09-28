import Logo from '@/app/Components/Logo'
import React from 'react'
import './Footer.scss'
import SocialIcons from '@/app/Components/SocialIcons'

const Footer = () => {
    return (
        <footer id='aboutus'>
            <div class="footer-container">
                <div class='social-icons-container'>
                    <Logo white />
                    <p>iOrbit is a digital health company founded over 4 years ago. Our focus is to enable the convergence of clinical aspects, behavioral sciences and technology</p>
                    <div class="social-icons">
                       <SocialIcons icon="/facebook.svg"/>
                       <SocialIcons icon="/twitter.svg"/>
                       <SocialIcons icon="/instagram.svg"/>
                       <SocialIcons icon="/linkedin.svg"/>
                       <SocialIcons icon="/youtube.svg"/>
                    </div>
                </div>
                <div class='site-map'>
                    <h4>Site Map</h4>
                    <div class="under-line"></div>
                    <ul>
                        <li>About us</li>
                        <li>Our Solutions</li>
                        <li>Product Design</li>
                        <li>Updates</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class='our-solution'>
                    <h4>Our Solutions</h4>
                    <div class="under-line"></div>
                    <ul>
                        <li>iOrbit Helath System</li>
                        <li>White Labelled Designs</li>
                        <li>Device Development</li>
                        <li>Technical Consultation</li>
                        <li>Verification And Validation</li>
                    </ul>
                </div>
                <div class="contact">
                    <h4>Contact</h4>
                    <div class="under-line"></div>
                    <ul class="contact-ul">
                        <li>
                            <img src='/location.svg' />
                            <span>iOrbit Digital Technologies LLC
                                Atlanta, USA</span>
                        </li>
                        <li>
                            <img src='/location.svg' />
                            <span>iOrbit Digital Technologies Pvt. Ltd.India</span>
                        </li>
                        <li>
                            <img src='/mail.svg' />
                            <div class='mail-link'>
                            <a href="mailto:support@iorbit-tech.com">support@iorbit-tech.com</a>
                            <a href="mailto:sales@iorbit-tech.com">sales@iorbit-tech.com</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <nav class='bottom-nav-bar'>   
            © 2023 iorbit-tech. All Rights Reserved.
                <div class="menu-section">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer