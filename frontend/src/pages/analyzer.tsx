import { Link } from 'react-router-dom';

function Analyzer() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/analyzer">analyzer</Link>
      <div>analyzer</div>
    </nav>
  );
}

export default Analyzer