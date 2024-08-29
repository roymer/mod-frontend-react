import './App.css';

import LoginForm from './screens/Forms/LoginForm';
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        {/* <Navbar /> */}
        <LoginForm />
        <Outlet />
    </>
  );
}

export default App;
