import './style.css';
import Image from '../../../assets/img3.png';
import { Link } from 'react-router-dom';

export const Project3 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Bateria Eletrônica</p>
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
                        <a href="https://tiagocastilho.github.io/Estudo---Javascript/Projeto%2011%20-%20Bateria/"  target="_blank" rel="noopener noreferrer" className="project-button">Testar Projeto</a>
                        <Link to='/works' className="project-backButton">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 