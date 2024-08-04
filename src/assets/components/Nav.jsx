import './Nav.css'

function Nav() {
    return(
        <nav>
            <div className='logo'>
                <img src="public\images\brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li href='#'>Menu</li>
                <li href='#'>About</li>
                <li href='#'>Contact</li>
                <li href='#'>Location</li>
            </ul>
            <button>Login</button>
        </nav>
    )

}

export default Nav