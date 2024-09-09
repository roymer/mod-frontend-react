import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ user, email }) => {
    const form = useSelector(state => state.form);

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
                {form.formData.username ? (
                        <span>Bienvenido {form.formData.username} : {form.formData.email}</span>
                    ) :
                    ('')
                }
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;