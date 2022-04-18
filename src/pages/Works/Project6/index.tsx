import Image from '../../../assets/img6.png';
import './style.css';

export const Project6 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Clone do Starbucks</p>
            </div>
            <div className="project-body">
                <div className="left-side">
                    <img src={Image} alt="" />
                </div>
                <div className="right-side">
                    <p>Este projeto foi desenvolvido em aula com aplicação de Flexbox e CSSGrid com utilização das seguintes tecnolodias:</p>
                    <br />
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                    <a href="https://tiagocastilho.github.io/Estudo---HTML-e-CSS/Projeto%2011%20-%20Starbucks%20com%20Flexbox%20e%20Grid/"  target="_blank" rel="noopener noreferrer" className="buttom">Veja</a>
                </div>
            </div>
        </div>
    );
}