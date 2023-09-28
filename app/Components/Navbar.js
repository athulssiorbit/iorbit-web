import React from 'react'
import "./NavBar.scss"
import Logo from './Logo'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
           <Logo />
            <div class="menu-section">
                <ul>
                    <li><h1><Link href="#aboutus">About Us</Link></h1></li>
                    <li><h1><Link href="#our-solutions">Our Solutions</Link></h1></li>
                    <li><h1><Link href="#aboutus">Product Design</Link></h1></li>
                    <li><h1><Link href="#aboutus">Updates</Link></h1></li>
                    <li><h1><Link href="#aboutus">Careers</Link></h1></li>
                    <li><h1><Link href="#aboutus">Contact</Link></h1></li>
                </ul>
                <button>
                    <span> Member Login</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar