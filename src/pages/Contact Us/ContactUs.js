import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Col, Row } from "reactstrap";
import './ContactUsStyles.css';

const ContactUsPage = () => {
    return (
        <Container>
            <Row>
                <Col sm='12'>
                    <h1 className="contactUsMainTitle">Catering and Events</h1>
                    <p className="contactUsContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rem dignissimos deserunt aut et,
                        eligendi perspiciatis nesciunt, quasi ea, ullam quod? Omnis repudiandae, nesciunt aspernatur sequi
                        provident fugit officiis numquam!</p>
                </Col>
                <Col sm='12'>
                    <h2 className="contactUsSubTitle">Book us for your next event!</h2>
                    <hr />
                </Col>
            </Row>
            <ContactForm className='contactForm' />
        </Container>
    )
};

export default ContactUsPage;