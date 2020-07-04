import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Container } from 'react-bootstrap';

import { query } from '../controller';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Articles from '../components/Articles';

import { IArticleDto } from '../dto/ArticleDto';

type Props = {
  readonly articles: Array<IArticleDto>;
};

const Home = ({
  atricles,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <>
    <Header />
    <Nav />
    <Container fluid>
      <Articles articles={atricles} />
    </Container>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  let atricles = [];
  try {
    atricles = await query();
  } catch (err) {
    console.error(`Error occured => `, err);
  }

  return { props: { atricles } };
};

export default Home;
