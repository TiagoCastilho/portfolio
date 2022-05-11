import { Link } from 'react-router-dom';
import Image from '../../../assets/img11.png';
import './style.css';

export const Project11 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Urna Eletrônica</p>
            </div>
            <div className="project-body">
                <div className="left-side">
                    <img src={Image} alt="" />
                </div>
                <div className="right-side">
                    <p>Este projeto foi desenvolvido em aula com a utilização das seguintes tecnolodias:</p>
                    <br />
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                    </ul>
                    <div className='button-area'>
                        <a href="https://tiagocastilho.github.io/Estudo---Javascript/Projeto%208%20-%20Urna%20Eletr%C3%B4nica/"  target="_blank" rel="noopener noreferrer" className="project-button">Testar Projeto</a>
                        <Link to='/works' className="project-backButton">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 