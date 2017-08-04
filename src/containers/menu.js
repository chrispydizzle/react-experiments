import React from 'react'
import {Link} from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Menu = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </nav>
    </header>
)

export default Menu
