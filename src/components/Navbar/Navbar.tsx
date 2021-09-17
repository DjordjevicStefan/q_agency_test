import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface PropsInterface {
  message: string;
}

const Navbar = ({ message }: PropsInterface) => {
  console.log(message + "Navbar");
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Q Agency
        </Link>

        <div className='row justify-content-between'>
          <div className='col'>
            <Link className='btn btn-dark' to='/'>
              Home
            </Link>
          </div>
          <div className='col'>
            <Link className='btn btn-success' to='/posts'>
              Postovi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
