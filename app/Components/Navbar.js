"use client"
import React, { useState } from 'react'
import "./NavBar.scss"
import Logo from './Logo'
const Navbar = () => {
   
    return (
        <nav>
           <Logo />
            <div class="menu-section">
                <ul>
                    <li>About Us</li>
                    <li>Our Solutions</li>
                    <li>Product Design</li>
                    <li>Updates</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <button>
                    <span> Member Login</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar