import { MENUITEMS } from '../../app/assets/App Data/MENUITEMS';
import { Col, Container, Row } from 'reactstrap';
import MenuCard from "./MenuCard";


const MenuItemsList = () => {
    return (
        <Container>
            <h1>Meats</h1>
            <Row className='ms-auto'>
                {MENUITEMS.filter((menuItem) => {
                    return menuItem.type === 'meats';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h1>Shareables/Snacks</h1>
            <Row className='ms-auto'>
                {MENUITEMS.filter((menuItem) => {
                    return menuItem.type === 'shareable';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h1>Sides by Mama Jeffries</h1>
            <Row className='ms-auto'>
                {MENUITEMS.filter((menuItem) => {
                    return menuItem.type === 'sides';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h1>Desserts</h1>
            <Row className='ms-auto'>
                {MENUITEMS.filter((menuItem) => {
                    return menuItem.type === 'desserts';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};

export default MenuItemsList;
