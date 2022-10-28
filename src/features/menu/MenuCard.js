import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'reactstrap';
import './MenuStyles.css';

const MenuCard = ({ menuItem }) => {
    const { name, description, price } = menuItem;
    return (
        <Row>
            <Col sm='12' className='menuContent'>
                <h3 className='menuCardTitle'>{name}</h3>
                <h4 className='menuCardSubtitle'>{description}  {price}<a className='btn'>
                    <FontAwesomeIcon icon={faCamera} size='lg' />
                </a></h4>
            </Col>
        </Row>
    );
}

export default MenuCard;