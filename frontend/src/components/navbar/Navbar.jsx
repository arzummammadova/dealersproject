import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


import './navbar.scss'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const basket=useSelector((state)=>state.basket.basket)|| []
    const count=basket.reduce((sum,product)=>sum+product.count,0)
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
                                <li><Link to='/basket'>Baske</Link></li>
                                <li><Link to='/wishlist'>Wishlist</Link></li>
                            </ul>
                        </div>
                       
                        <div className="actions">
                            <ul>
                                <li><Link to='/'><CiSearch />
                                </Link></li>
                                <li><Link to='/wishlist'><CiHeart />
                                </Link></li>
                                <li><Link to='/basket'><FaBasketShopping />
                                <sup style={{color:"red"}}>{count}</sup>
                                
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
