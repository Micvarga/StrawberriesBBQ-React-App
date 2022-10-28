import { MENUITEMS } from '../../app/assets/App Data/MENUITEMS';
import { Col, Container, Row } from 'reactstrap';
import MenuCard from "./MenuCard";
import './MenuStyles.css';


const MenuItemsList = () => {
    return (
        <>
            <h1>Menu</h1>
            <Container className='menuBody'>
                <h2>Meats</h2>
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
                <h2>Shareables/Snacks</h2>
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
                <h2>Sides by Mama Jeffries</h2>
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
                <h2>Desserts</h2>
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
        </>
    )
};

export default MenuItemsList;
