import CarouselComponent from "../../components/Carousel/Carousel";
import { Container } from "reactstrap";
import EventsList from "../../features/events/EventsList";

const HomePage = () => {
    return (
        <>
            <Container>
                <CarouselComponent />
            </Container>
            <Container>
                <EventsList />
            </Container>
        </>


    )
};

export default HomePage;