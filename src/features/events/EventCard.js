import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import './EventCardStyles.css';

const EventCard = ({ event }) => {
    const { eventLocation, dates, time } = event;
    return (
        <Card className='card'>
            <CardBody className='cardBody'>
                <CardTitle className='cardTitle'>{eventLocation}</CardTitle>
                <CardSubtitle className='cardSubtitle'>Dates: {dates}</CardSubtitle>
                <CardSubtitle className='cardSubtitle'>Time:{time} CST</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default EventCard;