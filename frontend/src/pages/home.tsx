import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pages/analyzer">analyzer</Link>
    </nav>
  );
}

export default Navbar;


//const Home = () => {
//  return <h1>Home</h1>
//}

//export default Home