import CarouselComponent from "../../components/Carousel/Carousel";
import { Container } from "reactstrap";
import EventsList from "../../features/events/EventsList";
import MenuHero from "../../components/Hero/MenuHero/MenuHero";


const HomePage = () => {
    return (
        <>
            <CarouselComponent />
            <MenuHero />
            <Container>
                <EventsList />
            </Container>
        </>


    )
};

export default HomePage;