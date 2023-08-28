 import styled from 'styled-components';
 
 const Nav = () => {

    const NavBar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
    `

    const Calendar = styled.div`
        display: flex;
    `


    return (
        <NavBar>
            <p className='welcome-user'>Welcome User!</p>
            <Calendar>
                <p>View entries for a different date: </p>
                <input type='date'/>
            </Calendar>
        </NavBar>
    )
}

export default Nav
