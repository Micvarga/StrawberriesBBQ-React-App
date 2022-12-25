import { selectAllMonthlyEvents } from './eventsSlice';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import EventCard from '../events/EventCard';
import './EventStyles.css';

const EventsList = () => {
    const monthlyEvents = useSelector(selectAllMonthlyEvents);
    const isLoading = useSelector((state) => state.monthlyEvents.isLoading);
    const errMsg = useSelector((state) => state.monthlyEvents.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

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