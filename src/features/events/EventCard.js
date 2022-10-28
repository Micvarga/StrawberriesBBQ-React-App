import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import './EventCardStyles.css';

const EventCard = ({ event }) => {
    const { eventLocation, dates, time } = event;
    return (
        <Card className='eventCard'>
            <CardBody className='eventCardBody'>
                <CardTitle className='eventCardTitle'>{eventLocation}</CardTitle>
                <CardSubtitle className='eventCardSubtitle'>Dates: {dates}</CardSubtitle>
                <CardSubtitle className='eventCardSubtitle'>Time:{time} CST</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default EventCard;