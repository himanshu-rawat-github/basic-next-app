import React from 'react'
import Link from 'next/link'

export default function Navbar({home,about}) {
    return (
        <>
            <nav id="main-nav">
                <div className="container">
                    <Link href='/'>
                        <img src="./img/logo.png" alt="NewsGrid" className="logo"/>
                    </Link>
                    <div className="social">
                        <Link href="https://facebook.com">
                            <a target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                        </Link>
                        <Link href="https://twitter.com">
                            <a target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                        </Link>
                        <Link href="https://instagram.com">
                            <a target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                        </Link>
                        <Link href="https://youtube.com">
                            <a target="_blank"><i className="fab fa-youtube fa-2x"></i></a>
                        </Link>
                    </div>

                    <ul>
                        <Link href="/">
                            <li><a className={home && "current"}>Home</a></li>
                        </Link>
                        <Link href="/about">
                            <li><a className={about && "current"} >About</a></li>
                        </Link>
                    </ul>
                </div>
            </nav> 
        </>
    )
}
