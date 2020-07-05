import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import { query } from '../controller';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Articles from '../components/Articles';
import Error from '../components/Error';

const Home = ({
  atricles,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const [err, setError] = useState(error);

  return (
    <>
      <Header />
      <Nav hasArticles={atricles.length > 0} setError={setError} />
      <Error error={err} setError={setError} />
      <Container fluid>
        <Articles articles={atricles} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let atricles = [];
  let error = { name: '', message: '' };
  try {
    atricles = await query();
  } catch (err) {
    error = { name: err.name, message: err.message };
  }

  return { props: { atricles, error } };
};

export default Home;
