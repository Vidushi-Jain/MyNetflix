import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <>
        <header className='showcase'>
        <div className='showcase-top'>
        <img src='https://tse2.mm.bing.net/th?id=OIP.AC0iUF7KyK0iqL7HZ2JzcQHaD5&pid=Api&P=0&h=180' ></img>
        <Link to='/' className='btn-header btn-rounded'>Sign in</Link>
        </div>

        <div className='showcase-content'>
        <h1>Unlimited Movies,TV shows and more</h1>
        <p>Watch anywhere,Cancel anytime</p>
        <Link to="/netflixShow" className='btn-header btn-x1' font='Elizabeth'>
        Watch free for 30 days
        <i class="fas fa-arrow-right"></i>
        </Link>
        
        </div>
        </header>
        </>
    )
}

export default Header

