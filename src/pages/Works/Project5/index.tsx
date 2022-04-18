import Image from '../../../assets/img5.png';
import './style.css';

export const Project5 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Clone da página Medicenter</p>
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
                    </ul>
                    <a href="https://tiagocastilho.github.io/Estudo---HTML-e-CSS/Projeto%2001%20-%20P%C3%A1gina%20com%20Flexbox%20-%20Medicenter/medicenter/"  target="_blank" rel="noopener noreferrer" className="buttom">Veja</a>
                </div>
            </div>
        </div>
    );
}