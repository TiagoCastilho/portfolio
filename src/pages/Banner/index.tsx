import { Link } from 'react-router-dom';
import { Clock } from '../../components/Clock';
import { Turn } from '../../components/Clock';
import Image from '../../assets/logo-sembg002.png';
import './style.css';

export const Banner = () => {
    return(
        <div className="pic-ctn">
            <div className="pic slide">                   
                <div className="slidearea">
                    <h1><Turn /><span>Sejam bem-vindos!</span></h1>
                    <Clock />
                </div>
            </div>
            <div className="pic slide">
                <div className="slidearea">
                    <img src={Image} alt="" />
                    <h1>Desenvolvemos sonhos<br /><span>Compartilhamos ideias</span></h1>
                    <Link to={'/about'} className="buttom-banner">Sobre nós</Link>
                </div>
            </div>            
        </div>
    );
}