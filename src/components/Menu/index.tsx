import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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