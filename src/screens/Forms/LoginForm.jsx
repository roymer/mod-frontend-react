import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import Navbar from '../../components/Navbar';

import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import ModalInfoLogOut from "../../components/ModalInfoLogOut";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalInfoLogOut, setModalInfoLogOut] = useState(false);
    
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const myPassword = 'mod7ReactUSIP';

        if (password.value === myPassword) {
            dispatch(saveFormData(values));
            console.log(values);
          } else {
            console.log('Password incorrecto');
          }
    }

    ///LogOut
    const handleLogoutData = () => {
        dispatch({ type: 'RESET_FORM_DATA' });
        hideModalLogOut();
      };

    ///Ocultar password
    const [passwordShow, setPasswordShow] = useState(false);

    const showHiddenPassword = () => {
      setPasswordShow(!passwordShow);
    };

    ///Modal
    const showModal = () => {
        setShowModalInfo(true);
    }

    const hideModal = () => {
        setShowModalInfo(false);
    }

    const showModalLogOut = () => {
        setModalInfoLogOut(true);
    }

    const hideModalLogOut = () => {
        setModalInfoLogOut(false);
    }

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
            <Navbar user={form.formData.username} email={form.formData.email} />

            <div className="container">
            <ModalInfo visible = {showModalInfo} message="Chau modulo 7" onClose={hideModal}/>          
            <ModalInfoLogOut visible = {showModalInfoLogOut} message="¿Seguro que desa salir?" onClose={hideModalLogOut} onConfirm={handleLogoutData}/>          

            <form onSubmit={handleSubmit}>
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5>
                <h5>password: {form.formData.password}</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordShow ? "text" : "password"}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button onClick={showHiddenPassword}>
                      {passwordShow ? "Ocultar" : "Mostrar"}
                    </button>
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    {
                        form.formData.username && form.formData.email && form.formData.password? (
                            <button onClick={showModalLogOut}>Salir</button>
                        ) : null
                    }
                </div>

            <button onClick={showModal}>Mostrar Modal</button>
            </form>
        </div>
    </motion.div>
    );
};

export default LoginForm;