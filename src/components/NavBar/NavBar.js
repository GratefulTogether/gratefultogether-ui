 import styled from 'styled-components';
 
 const Nav = () => {

    const NavBar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
    `


    return (
        <NavBar>
            {/* <p className='welcome-user'>Welcome User!</p> */}
        </NavBar>
    )
}

export default Nav
