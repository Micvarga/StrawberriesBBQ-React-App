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
    Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../../app/assets/img/logoMain.png';
import logo2 from '../../app/assets/img/secondaryLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faHome, faInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Header.css'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className="navSection" fluid>
            <Row>
                <Col className="mainLogo text-center" sm='12'>
                    <img src={logo} alt='Strawberries BBQ logo' className='img-fluid mainLogoImg' href='/' />
                </Col>
                <Col sm='12' className="navBar">
                    <Navbar dark sticky='top' expand='md'>
                        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                        <Collapse isOpen={menuOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/'>
                                        <FontAwesomeIcon icon={faHome} size='lg' /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <FontAwesomeIcon icon={faUtensils} size='lg' /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>
                                        <FontAwesomeIcon icon={faInfo} size='lg' /> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                        <FontAwesomeIcon icon={faEnvelope} size='lg' /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <NavbarBrand href='/' className='ms-5 d-none d-sm-block'>
                            <img src={logo2} alt='Strawberries brand logo' className=' brand-logo img-fluid' />
                        </NavbarBrand>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
