import { Link } from 'react-router-dom';

const Navbar = ({ user, email }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <div className='span-color'>
                  Bienvenido <span> {user} </span>
                  <span> {email}</span>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;