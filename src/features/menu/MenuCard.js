import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'reactstrap';
import MenuImageModal from './MenuImageModal';
import './MenuStyles.css';

const MenuCard = ({ menuItem }) => {
    const { name, description, price } = menuItem;
    return (
        <Row>
            <Col sm='12' className='menuContent'>
                <h3 className='menuCardTitle'>{name}</h3>
                <p>className='menuCardDescription'>{description}  {price}</p>
            </Col>
        </Row>
    );
}

export default MenuCard;