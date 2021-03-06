import { Navbar, Button, Modal } from 'react-bootstrap';
import React, { memo, useState, useCallback } from 'react';

type Props = {
  readonly hasArticles: boolean;
  readonly setError: React.Dispatch<
    React.SetStateAction<{
      name: string;
      message: string;
    }>
  >;
};

const Nav = ({ hasArticles, setError }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleFetch = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/fetch-articles');
      const { success, error = {} } = await response.json();
      if (success) {
        setShow(true);
      } else {
        setError((state) => ({ ...state, ...error }));
      }
    } catch (err) {
      setError((state) => ({ ...state, name: err.name, message: err.message }));
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand href="/" className="text-light">
          Super Brand
        </Navbar.Brand>
        <Button variant="primary" onClick={handleFetch} disabled={loading}>
          {hasArticles ? 'Refresh articles' : 'Fetch Articles'}
        </Button>
      </Navbar>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Body>Articles fetched!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(Nav);
