import './style.css';
import Image from '../../../assets/img1.png';
import { Link } from 'react-router-dom';

export const Project1 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Jogo da Memória</p>
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
                            <li>ReactJS</li>
                    </ul>
                    <div className='button-area'>
                        <a href="https://tiagocastilho.github.io/Estudo---ReactJS/react-ex06/build/index.html"  target="_blank" rel="noopener noreferrer" className="project-button">Testar Projeto</a>
                        <Link to='/works' className="project-backButton">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}