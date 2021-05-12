import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
    const [doctitle, setDocTitle] = useState("Lizzy's")

    useEffect(() => {
        document.title = doctitle
    }, [doctitle])


    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={() => setDocTitle("Home")}
                    >Home</Link>
                </li>
                <li>
                    <Link 
                        to="/about"
                        onClick={() => setDocTitle("About")}
                    >About</Link>
                </li>
                <li>
                    <Link 
                        to="/blog"
                        onClick={() => setDocTitle("Blog")}
                    >Blog</Link>
                </li>
                <li>
                    <Link 
                        to="/contact"
                        onClick={() => setDocTitle("Contact me!")}
                    >Contact</Link>
                </li>
                <li>
                    <Link to="/gallery"
                    onClick={() => setDocTitle("Gallery")}
                    >Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}