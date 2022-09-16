import ContactForm from "../components/ContactForm";
import { Container, Col, Row } from "reactstrap";

const ContactUsPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Catering and Events</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rem dignissimos deserunt aut et,
                            eligendi perspiciatis nesciunt, quasi ea, ullam quod? Omnis repudiandae, nesciunt aspernatur sequi
                            provident fugit officiis numquam!</p>
                    </Col>
                    <Col>
                        <h2>Book us for your next event!</h2>
                        <hr />
                    </Col>
                </Row>
                <ContactForm />
            </Container>
        </>
    )
};

export default ContactUsPage;