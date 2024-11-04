import React from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>LeetCode Showcase</h1>
            <ul className="nav-links">
                <li>
                    <a href="https://www.linkedin.com/in/dlim67/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DasolLim" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://leetcode.com/u/Dasol_Lim/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="icon" /> LeetCode
                    </a>
                </li>
                <li>
                    <a href="https://dasollim.github.io/Personal-Portfolio/" target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="icon" /> Personal Website
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;