import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';
import './Loading.css';

const Loading = () => {
    return (
        <Col className='loadingIconContainer'>
            <FontAwesomeIcon icon={faTruckLoading} className="fa-beat-fade" size='2xl' />
            <p>Loading...</p>
        </Col>
    );
};

export default Loading;