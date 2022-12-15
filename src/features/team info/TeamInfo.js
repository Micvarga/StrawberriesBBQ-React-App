import { Col, Row, Container } from "reactstrap";
import teamMember from '../../app/assets/img/teamMember.jpg';
import teamMember2 from '../../app/assets/img/teamMember2.jpg';
import './TeamInfo.css';

const TeamInfo = () => {
    return (
        <div className="teamInfoSection">
            <Container className="teamInfoContent">
                <Row>
                    <Col sm='12'>
                        <h1 className="teamInfoTitle">About Strawberries BBQ</h1>
                        <p className="companyStoryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                            perspiciatis laudantium assumenda alias, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                            neque repellendus sequi.</p>
                    </Col>
                </Row>
                <div className="mb-5 mt-5">
                    <h2 className="teamInfoSubTitle">The Team</h2>
                </div>
                <Row>
                    <Col sm='12' md='6' className="mb-5">
                        <img src={teamMember} className='img-thumbnail teamMemberPhoto' />
                    </Col>
                    <Col sm='12' md='6' className="mb-5">
                        <h3 className="teamMemberTitle">Team Member#1</h3>
                        <p className="teamMemberInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                            perspiciatis laudantium assumenda alias, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                            neque repellendus sequi.</p>
                    </Col>
                    <Col sm='12' md='6' className="mb-5">
                        <img src={teamMember2} className='img-thumbnail teamMemberPhoto' />
                    </Col>
                    <Col sm='12' md='6' className="mb-5">
                        <h3 className="teamMemberTitle">Team Member#2</h3>
                        <p className="teamMemberInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci et vitae ratione
                            perspiciatis laudantium assumenda alas, corrupti totam illo vel quia ad rerum ipsa quasi, ipsum
                            neque repellendus sequi.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default TeamInfo;