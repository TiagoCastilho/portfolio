import './style.css';
import Image from '../../../assets/img1.png';

export const Project1 = () => {
    return (
        <div className="projectWindowArea">
            <div className="projectWindowBody">
                <div className="projectInfo--backMobileButton">Voltar</div>
                <div className="projectImg">
                    <img src={Image} />
                </div>
                <div className="projectInfo">
                    <h1>Jogo da Memória</h1>
                    <div className="projectInfo--desc">Este projeto foi desenvolvido em aula com a utilização das seguintes tecnolodias:</div>
                    <div className="projectInfo--infoarea">
                        <div className="projectInfo--techInfo">Tecnologias utilizadas</div>
                        <ul className="projectInfo--tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                        </ul>
                    </div>
                    <a href="https://tiagocastilho.github.io/Estudo---ReactJS/react-ex06/build/index.html"  target="_blank" rel="noopener noreferrer" className="projectInfo--testButton">Testar Projeto</a>
                    <div className="projectInfo--backButton">Voltar</div>
                </div>
            </div>
        </div>
    );
}