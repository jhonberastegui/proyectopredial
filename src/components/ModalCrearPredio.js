import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function ModalCrearPredio(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        { props.title }
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos Guardados</Modal.Title>
        </Modal.Header>
        <Modal.Body>Predio creado con éxito</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCrearPredio;