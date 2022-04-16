import Image from '../../../assets/img2.png';
import './style.css';

export const Project2 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Desenhe no Canvas</p>
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
                    <a href="https://tiagocastilho.github.io/Estudo---Javascript/Projeto%2015%20-%20Quadro%20de%20desenho/"  target="_blank" rel="noopener noreferrer" className="buttom">Desenhe</a>
                </div>
            </div>
        </div>
    );
}