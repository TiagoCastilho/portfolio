import Image from '../../../assets/img3.png';
import './style.css';

export const Project3 = () => {
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
                        <li>ReactJS</li>
                    </ul>
                    <a href="https://tiagocastilho.github.io/Estudo---ReactJS/react-ex02/build/index.html"  target="_blank" rel="noopener noreferrer" className="buttom">Calcule</a>
                </div>
            </div>
        </div>
    );
}