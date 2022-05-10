import './style.css';
import Image from '../../../assets/img3.png';

export const Project3 = () => {
    return (
        <div className="projectWindowArea">
            <div className="projectWindowBody">
                <div className="projectInfo--backMobileButton">Voltar</div>
                <div className="projectImg">
                    <img src={Image} />
                </div>
                <div className="projectInfo">
                    <h1>Bateria Eletrônica</h1>
                    <div className="projectInfo--desc">Este projeto foi desenvolvido em aula com a utilização das seguintes tecnolodias:</div>
                    <div className="projectInfo--infoarea">
                        <div className="projectInfo--techInfo">Tecnologias utilizadas</div>
                        <ul className="projectInfo--tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <a href="https://tiagocastilho.github.io/Estudo---Javascript/Projeto%2011%20-%20Bateria/"  target="_blank" rel="noopener noreferrer" className="projectInfo--testButton">Testar Projeto</a>
                    <div className="projectInfo--backButton">Voltar</div>
                </div>
            </div>
        </div>
    );
}