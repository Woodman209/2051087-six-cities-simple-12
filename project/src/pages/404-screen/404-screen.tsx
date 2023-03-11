import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function ErrorNotFound(): JSX.Element {
  return (
    <div>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <Link to={AppRoute.Root} style={{ color: 'green' }}>Go back to the main page</Link>
    </div>
  );
}
