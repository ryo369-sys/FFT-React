import { Link } from 'react-router-dom';

function Open_file() {
  return (
    <nav>
      <div>
        <input type="file" />
      </div>
      <Link to="/sample">sample</Link>
    </nav>
  )
}

export default Open_file