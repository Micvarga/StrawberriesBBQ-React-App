import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container className="site-footer" fluid>
            <Row>
                <Col xs='6' md='4'>
                    <h5 className="footerHeaders">Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs='6' md='4' className='text-center socialIconsSec'>
                    <h5 className="footerHeaders">Social</h5>
                    <a
                        className='btn btn-social-icon btn-instagram'
                        href='https://www.instagram.com/strawberriesbbq/?hl=en'
                    >
                        <i className='fa fa-instagram' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-facebook'
                        href='https://www.facebook.com/StrawberriesBBQ/'
                    >
                        <i className='fa fa-facebook' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-twitter'
                        href='http://twitter.com/'
                    >
                        <i className='fa fa-twitter' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-google'
                        href='http://youtube.com/'
                    >
                        <i className='fa fa-youtube' />
                    </a>
                </Col>
                <Col sm='4' className='text-center'>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:notreal@notreal.co'
                    >
                        <i className='fa fa-envelope-o' /> Strawberriesbbq@email.com
                    </a>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer;