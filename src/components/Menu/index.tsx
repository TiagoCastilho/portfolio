import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
    return(
        <header>
            <div className="header">
                <div className="logo">
                    <div className="logoimg"></div>
                </div>
                <div className="menu">
                    <img src="./assets/menu.png" alt="" />
                    <nav>
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">Quem somos</Link></li>
                            <li><Link to="/works">Trabalhos</Link></li>
                            <li><Link to="/contact">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
         </header>
    );
}