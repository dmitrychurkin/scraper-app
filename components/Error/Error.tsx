import { Alert } from 'react-bootstrap';
import React, { memo, useCallback } from 'react';

type Props = {
  readonly error: {
    readonly name: string;
    readonly message: string;
  };
  readonly setError: React.Dispatch<
    React.SetStateAction<{
      name: string;
      message: string;
    }>
  >;
};

const Error = ({ error, setError }: Props): JSX.Element => {
  const handleCloseError = useCallback(() => {
    setError((state) => ({ ...state, name: '', message: '' }));
  }, []);

  return (
    <>
      {(error.name || error.message) && (
        <Alert variant="danger" onClose={handleCloseError} dismissible>
          <Alert.Heading>{error.name || 'Server error occured!'}</Alert.Heading>
          <p>{error.message || 'Please try again later'}</p>
        </Alert>
      )}
    </>
  );
};

Error.defaultProps = {
  error: {
    name: '',
    message: '',
  },
};

export default memo(Error);
