import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <p></p>
      <Link to="/pages">analyzer</Link>
      <p></p>
    </nav>
  );
}

export default Navbar;


//const Home = () => {
//  return <h1>Home</h1>
//}

//export default Home