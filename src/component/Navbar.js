import React, { useContext } from "react";
import Logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import '../style/nav.css';
import ExpenseContext from "../context/ExpenseContext";

export default function Navbar() {
    const navigate = useNavigate();
    const LogOut = async () => {
        localStorage.clear();
        navigate('/login');
    }
    const { check, setCheck } = useContext(ExpenseContext);

    const toggleMode = () => {
        setCheck(prevCheck => !prevCheck);
    };

    return (
        <div>
            <nav>
                <div className="img">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="nav-right">
                    <button onClick={toggleMode}>
                        {check ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <button onClick={LogOut}>LogOut</button>
                </div>
            </nav>
        </div>
    );
}
