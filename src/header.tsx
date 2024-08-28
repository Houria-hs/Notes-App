import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';



interface IHeaderProps {
}

const Header : React.FunctionComponent<IHeaderProps> = (props) => {
    return (
    <Navbar expand="lg" className="Header">
        <Navbar.Brand className='header-brand' href="#home">Notes App</Navbar.Brand>
    </Navbar>
    )
};

export default Header;
