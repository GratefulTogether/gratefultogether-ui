 import './NavBar.css'
 
 const Nav = () => {

    return (
        <nav className='navbar'>
            <p className='welcome-user'>Welcome User!</p>
            <div className='calendar'>
                <p>View entries for a different date: </p>
                <input type='date'/>
            </div>
        </nav>
    )
}

export default Nav
