import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import menuImg from '../../assets/menu.png';

export const Menu = () => {
    const [toogle, setToogle] = useState(true);
    const [show, setShow] = useState('none');
    useEffect(() => {
      setShow((state) => toogle ? 'none': 'block');
    }, [toogle]);

    return(
        <header>
            <div className="header">
                <div className="logo">
                    <div className="logoimg"></div>
                </div>
                <div className="menu">
                    <img 
                        onClick={e=>setToogle(state => !state)}
                        className="menu-opener" 
                        src={menuImg} 
                        alt=""
                    />
                    <nav style={{
                            display:show,
                    }}>
                        <ul onClick={e=>setToogle(state => !state)}>
                            <li><NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Quem somos</NavLink></li>
                            <li><NavLink to="/works" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Trabalhos</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Contato</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="closeMenu isClose"
                    onClick={e=>setToogle(state => !state)}
                    style={{
                        display:show,
                }}></div>
            </div>
         </header>
    );
}