import { memo } from 'react';
import { Table } from 'react-bootstrap';
import { IArticleDto } from '../../dto/ArticleDto';

type Props = {
  readonly articles: Array<IArticleDto>;
};

const Articles = ({ articles }: Props): JSX.Element => (
  <Table striped bordered hover responsive size="sm">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>URL</th>
        <th>Points</th>
        <th>Username</th>
        <th>Total Comments Number</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      {articles.map((article) => (
        <tr key={article.id}>
          <td>{article.id}</td>
          <td>{article.title}</td>
          <td>
            <a href={article.url}>{article.url}</a>
          </td>
          <td>{article.points}</td>
          <td>{article.userName}</td>
          <td>{article.totalComments}</td>
          <td>{article.created}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

Articles.defaultProps = {
  articles: [],
};

export default memo(Articles);
