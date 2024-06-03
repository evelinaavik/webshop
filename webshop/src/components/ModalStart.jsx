import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privaatsussätted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, kasutame küpsiseid!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Nõustun
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Keeldun
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;