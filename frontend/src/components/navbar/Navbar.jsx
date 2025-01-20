import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <section id='nav'>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to=''>Dealers</Link>
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/admin'>Admin</Link></li>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Home</Link></li>
                            </ul>
                        </div>
                       
                        <div className="actions">
                            <ul>
                                <li><Link to='/'><CiSearch />
                                </Link></li>
                                <li><Link to='/'><CiHeart />
                                </Link></li>
                                <li><Link to='/'><FaBasketShopping />
                                </Link></li>
                            </ul>
                        </div>
                        <div className="burger">
                        <GiHamburgerMenu />

                        </div>

                    </nav>
                </div>
            </section>

        </>
    )
}

export default Navbar
