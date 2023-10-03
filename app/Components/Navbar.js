"use client"
import React, { useState } from 'react'
import "./NavBar.scss"
import Logo from './Logo'
import Link from 'next/link'
const Navbar = () => {
   
    return (
        <nav>
           <Logo />
            <div class="menu-section">
                <ul>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Our Solutions</Link></li>
                    <li><Link href="#">Product Design</Link></li>
                    <li><Link href="#">Updates</Link></li>
                    <li><Link href="#">Careers</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
                <button>
                    <span> Member Login</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar