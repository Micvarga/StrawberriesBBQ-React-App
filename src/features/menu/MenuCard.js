import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const MenuCard = ({ menuItem }) => {
    const { name, description, price } = menuItem;
    return (
        <div>
            <h5 className='cardTitle'>{name}</h5>
            <p className='cardSubtitle'>{description}</p>
            <p className='cardSubtitle'>{price}<a className='btn'>
                <FontAwesomeIcon icon={faCamera} size='lg' />
            </a></p>
        </div>
    );
}

export default MenuCard;