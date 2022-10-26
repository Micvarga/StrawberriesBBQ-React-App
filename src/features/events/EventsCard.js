import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const EventCard = ({ event }) => {
    const { eventLocation, dates } = event;
    return (
        <Card>
            <CardBody>
                <CardTitle>{eventLocation}</CardTitle>
                <CardSubtitle>{dates}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default EventCard;