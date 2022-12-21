import { selectAllMonthlyEvents } from './eventsSlice';
import { Col, Row } from 'reactstrap';
import EventCard from '../events/EventCard';
import './EventStyles.css';

const EventsList = () => {
    const monthlyEvents = selectAllMonthlyEvents();

    return (
        <Row className='eventsList'>
            {monthlyEvents.map((event) => {
                return (
                    <Col xs='12' lg='6' key={event.id}>
                        <EventCard event={event} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default EventsList;