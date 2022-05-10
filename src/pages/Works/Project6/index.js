import './style.css';
import Image from '../../../assets/img6.png';

export const Project6 = () => {
    return (
        <div className="projectWindowArea">
            <div className="projectWindowBody">
                <div className="projectInfo--backMobileButton">Voltar</div>
                <div className="projectImg">
                    <img src={Image} />
                </div>
                <div className="projectInfo">
                    <h1>Clone - Formulário de Pesquisa</h1>
                    <div className="projectInfo--desc">Este projeto foi desenvolvido em aula com a utilização das seguintes tecnolodias:</div>
                    <div className="projectInfo--infoarea">
                        <div className="projectInfo--techInfo">Tecnologias utilizadas</div>
                        <ul className="projectInfo--tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <a href="https://tiagocastilho.github.io/Estudo---HTML-e-CSS/Projeto%2003%20-%20Exerc%C3%ADcio%20-%20Formul%C3%A1rio%20de%20Pesquisa/Index.html"  target="_blank" rel="noopener noreferrer" className="projectInfo--testButton">Testar Projeto</a>
                    <div className="projectInfo--backButton">Voltar</div>
                </div>
            </div>
        </div>
    );
}