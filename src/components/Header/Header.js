import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Row,
    Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../../app/assets/img/logoMain.png';
import logo2 from '../../app/assets/img/secondaryLogo.png';
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Row>
                <Col className="mainLogo text-center">
                    <img src={logo} alt='Strawberries BBQ logo' className='img-fluid' href='/' />
                </Col>
            </Row>
            <Navbar dark sticky='top' expand='md'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>
                                <i className='fa fa-list fa-lg' /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarBrand href='/' className='ms-5 d-none d-sm-block'>
                    <img src={logo2} alt='nucamp logo' className='float-start' />
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default Header;
