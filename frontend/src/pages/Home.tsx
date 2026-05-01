import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Things I've built:</h1>
      <ul>
        <li>
          <Link to="/signup">Authentication: sing up, sign in, etc</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
