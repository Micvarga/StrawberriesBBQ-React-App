import { MONTHLYEVENTS } from '../../app/assets/App Data/MONTHLYEVENTS';
import { Col, Row } from 'reactstrap';
import EventCard from '../events/EventCard';

const EventsList = () => {
    return (
        <Row className='ms-auto'>
            {MONTHLYEVENTS.map((event) => {
                return (
                    <Col md='5' className='m-4' key={event.id}>
                        <EventCard event={event} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default EventsList;