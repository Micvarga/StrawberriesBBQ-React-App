import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const MenuCard = ({ menuItem }) => {
    const { name, description, price } = menuItem;
    return (
        <Card className='card'>
            <CardBody className='cardBody'>
                <CardTitle className='cardTitle'>{name}</CardTitle>
                <CardSubtitle className='cardSubtitle'>{description}</CardSubtitle>
                <CardSubtitle className='cardSubtitle'>{price}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default MenuCard;