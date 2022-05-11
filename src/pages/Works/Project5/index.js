import './style.css';
import Image from '../../../assets/img5.png';
import { Link } from 'react-router-dom';

export const Project5 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Quiz</p>
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
                    <a href="https://tiagocastilho.github.io/Estudo---Javascript/Projeto%2016%20-%20Quiz/"  target="_blank" rel="noopener noreferrer" className="project-button">Testar Projeto</a>
                    <Link to='/works' className="project-backButton">Voltar</Link>
                </div>
            </div>
        </div>
    );
} 