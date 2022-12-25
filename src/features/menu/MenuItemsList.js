import { selectAllMenuItems } from './menuSlice';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import MenuCard from "./MenuCard";
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MenuImageModal from './MenuImageModal';
import Cow from '../../app/assets/img/MenuBackgroundCow.jpg';
import Pig from '../../app/assets/img/MenuBackgroundPig.jpg';
import './MenuStyles.css';


const MenuItemsList = () => {
    const menuItems = useSelector(selectAllMenuItems);
    const isLoading = useSelector((state) => state.menuItems.isLoading);
    const errMsg = useSelector((state) => state.menuItems.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Container className='menuBody'>
            <h1 className='menuPageTitle'>Menu</h1>
            <div className='cowImageContainer'>
                <img src={Cow} alt='Cow meat cuts image' className='img-fluid' />
            </div>
            <h2 className='menuPageSubtitle'>Meats</h2>
            <Row>
                {menuItems.filter((menuItem) => {
                    return menuItem.type === 'meats';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                                <MenuImageModal menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h2 className='menuPageSubtitle'>Shareables/Snacks</h2>
            <Row>
                {menuItems.filter((menuItem) => {
                    return menuItem.type === 'shareable';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                                <MenuImageModal menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h2 className='menuPageSubtitle'>Sides by Mama Jeffries</h2>
            <Row>
                {menuItems.filter((menuItem) => {
                    return menuItem.type === 'sides';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                                <MenuImageModal menuItem={menuItem} />
                            </Col>
                        )
                    })
                }
            </Row>
            <h2 className='menuPageSubtitle'>Desserts</h2>
            <Row>
                {menuItems.filter((menuItem) => {
                    return menuItem.type === 'desserts';
                })
                    .map((menuItem) => {
                        return (
                            <Col key={menuItem.id} sm='12'>
                                <MenuCard menuItem={menuItem} />
                                <MenuImageModal menuItem={menuItem} />
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
