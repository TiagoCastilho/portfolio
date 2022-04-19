import Image from '../../../assets/img7.png';
import './style.css';

export const Project7 = () => {
    return(
        <div className='main'>
            <div className='project-title'>
                <p>Clone - Formulário de pesquisa</p>
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
                    <a href="https://tiagocastilho.github.io/Estudo---HTML-e-CSS/Projeto%2003%20-%20Exerc%C3%ADcio%20-%20Formul%C3%A1rio%20de%20Pesquisa/Index.html"  target="_blank" rel="noopener noreferrer" className="buttom">Veja</a>
                </div>
            </div>
        </div>
    );
}