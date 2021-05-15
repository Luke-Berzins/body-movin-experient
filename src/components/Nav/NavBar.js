import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from './nameSig.json'

export default function NavBar(props) {
    const [doctitle, setDocTitle] = useState("Lizzy's")
    const [play, setPlay] = useState(true)
    useEffect(() => {
        document.title = doctitle
    }, [doctitle])


    
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <nav>
             <Lottie options={defaultOptions}
              height={100}
              width={100}
            />  
            <button
            onClick={() => setPlay(false)}
            >Hi</button>
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