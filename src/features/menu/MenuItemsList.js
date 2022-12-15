import { MENUITEMS } from '../../app/assets/App Data/MENUITEMS';
import { Col, Container, Row } from 'reactstrap';
import MenuCard from "./MenuCard";
import Cow from '../../app/assets/img/MenuBackgroundCow.jpg';
import Pig from '../../app/assets/img/MenuBackgroundPig.jpg';
import './MenuStyles.css';


const MenuItemsList = () => {
    return (
        <Container className='menuBody'>
            <h1 className='menuPageTitle'>Menu</h1>
            <div className='cowImageContainer'>
                <img src={Cow} alt='Cow meat cuts image' className='img-fluid' />
            </div>
            <h2 className='menuPageSubtitle'>Meats</h2>
            <Row>
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
            <h2 className='menuPageSubtitle'>Shareables/Snacks</h2>
            <Row>
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
            <h2 className='menuPageSubtitle'>Sides by Mama Jeffries</h2>
            <Row>
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
            <h2 className='menuPageSubtitle'>Desserts</h2>
            <Row>
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
            <div className='pigImageContainer'>
                <img src={Pig} alt='Pig meat cuts image' className='img-fluid' />
            </div>

        </Container>
    )
};

export default MenuItemsList;
