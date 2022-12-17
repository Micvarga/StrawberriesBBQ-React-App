
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const MenuImageModal = ({ menuItem }) => {
    const { image, name } = menuItem;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);



    return (
        <div>
            <Button onClick={toggle} className='menuModalButton'>
                <FontAwesomeIcon icon={faCamera} size='lg' />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className='menuModal'>
                <ModalHeader toggle={toggle} className='menuModalHeader'>
                    <h2>{name}</h2>
                </ModalHeader>
                <ModalBody className='menuModalBody'>
                    <img src={image} className='img-fluid menuModalImage' />
                </ModalBody>
                <ModalFooter className='menuModalFooter'>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MenuImageModal;