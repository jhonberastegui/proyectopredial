import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ExampleModal(props) {
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
        <Modal.Body>Sus datos han sido guardado exitosamente en nuestro sistema</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Link to="/login"><Button variant="primary" onClick={handleClose}>
            Iniciar Sesión
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ExampleModal;