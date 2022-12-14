import { MONTHLYEVENTS } from '../../app/assets/App Data/MONTHLYEVENTS';
import { Col, Row } from 'reactstrap';
import EventCard from '../events/EventCard';
import './EventStyles.css';

const EventsList = () => {
    return (
        <Row className='eventsList'>
            {MONTHLYEVENTS.map((event) => {
                return (
                    <Col xs='12' key={event.id}>
                        <EventCard event={event} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default EventsList;