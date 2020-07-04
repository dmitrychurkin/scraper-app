import { Navbar, Button, Modal } from 'react-bootstrap';
import { memo, useState, useCallback } from 'react';

const Nav = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleFetch = useCallback(async () => {
    setLoading(true);
    try {
      await fetch('/api/fetch-articles');
      setShow(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
    setError(false);
  }, []);

  return (
    <>
      <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand href="/" className="text-light">
          Super Brand
        </Navbar.Brand>
        <Button variant="primary" onClick={handleFetch} disabled={loading}>
          Fetch Articles
        </Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{error || 'Articles fetched!'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(Nav);
