import { Col, Row, Container } from "reactstrap";
import teamMember from '../../app/assets/img/teamMember.jpg';
import './TeamInfo.css';

const TeamInfo = () => {
    return (
        <Container className="teamInfoContent">
            <Row>
                <Col sm='12'>
                    <h1 className="teamInfoSubTitle">About Strawberries BBQ</h1>
                    <p className="companyStoryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                        perspiciatis laudantium assumenda alias, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                        neque repellendus sequi.</p>
                </Col>
            </Row>
            <div className="mb-5 mt-5">
                <h2 className="teamInfoSubTitle">The Team</h2>
            </div>
            <Row>
                <Col sm='12' md='6' className="order-1 mb-5">
                    <h3>John Doe#1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                        perspiciatis laudantium assumenda alias, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                        neque repellendus sequi.</p>
                </Col>
                <Col sm='12' md='6' className="order-2 mb-5">
                    <img src={teamMember} className='img-thumbnail' />
                </Col>
                <Col sm='12' md='6' className="order-4 mb-5">
                    <h3>John Doe#2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                        perspiciatis laudantium assumenda alas, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                        neque repellendus sequi.</p>
                </Col>
                <Col sm='12' md='6' className="order-3 mb-5">
                    <img src={teamMember} className='img-thumbnail' />
                </Col>
            </Row>
        </Container>
    )
};

export default TeamInfo;