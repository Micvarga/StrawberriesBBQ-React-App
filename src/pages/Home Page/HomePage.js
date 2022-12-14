import CarouselComponent from "../../components/Carousel/Carousel";
import { Container } from "reactstrap";
import EventsList from "../../features/events/EventsList";

const HomePage = () => {
    return (
        <>
            <CarouselComponent />
            <Container>
                <EventsList />
            </Container>
        </>


    )
};

export default HomePage;