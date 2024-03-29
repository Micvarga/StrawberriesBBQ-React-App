import CarouselComponent from "../../components/Carousel/Carousel";
import { Container } from "reactstrap";
import EventsList from "../../features/events/EventsList";
import MenuHero from "../../components/Hero/MenuHero/MenuHero";
import EventsHero from "../../components/Hero/EventsHero/EventsHero";
import ContactUsHero from "../../components/Hero/ContactUsHero/ContactUsHero";


const HomePage = () => {
    return (
        <>
            <CarouselComponent />
            <MenuHero />
            <ContactUsHero />
            <EventsHero />
            <Container>
                <EventsList />
            </Container>
        </>


    )
};

export default HomePage;