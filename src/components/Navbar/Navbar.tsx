import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className=''>
      <h1 className={styles.test}>Q Agency app</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Postovi</Link>
      </div>
    </nav>
  );
};

export default Navbar;
