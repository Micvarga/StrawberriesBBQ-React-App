import { MEATITEMS, SHAREABLEITEMS, SIDEITEMS, DESSERTITEMS } from "../../app/assets/App Data/MENUITEMS.js";
import { Col, Container, Row } from 'reactstrap';
import MenuCard from "./MenuCard";


const MenuItemsList = () => {
    return (
        <Container>
            <Row className='ms-auto'>
                {MEATITEMS.map((menuItem) => {
                    return (
                        <Col key={menuItem.id}>
                            {/* <h1>Meats</h1> */}
                            <MenuCard menuItem={menuItem} />
                        </Col>
                    );
                })}
            </Row>
            {/* <Row className='ms-auto'>
                {SHAREABLEITEMS.map((menuItem) => {
                    return (
                        <Col key={menuItem.id}>
                            <h1>Meats</h1>
                            <MenuCard menuItem={menuItem} />
                        </Col>
                    );
                })}
            </Row>
            <Row className='ms-auto'>
                {SIDEITEMS.map((menuItem) => {
                    return (
                        <Col key={menuItem.id}>
                            <h1>Meats</h1>
                            <MenuCard menuItem={menuItem} />
                        </Col>
                    );
                })}
            </Row>
            <Row className='ms-auto'>
                {DESSERTITEMS.map((menuItem) => {
                    return (
                        <Col key={menuItem.id}>
                            <h1>Meats</h1>
                            <MenuCard menuItem={menuItem} />
                        </Col>
                    );
                })}
            </Row> */}
        </Container>
    )
};

export default MenuItemsList;
