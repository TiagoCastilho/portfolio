import './style.css';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.png';
import Img5 from '../../assets/img5.png';
import Img6 from '../../assets/img6.png';
import Img7 from '../../assets/img7.png';
import Img8 from '../../assets/img8.png';
import Img9 from '../../assets/img9.png';
import Img10 from '../../assets/img10.png';
import Img11 from '../../assets/img11.png';
import Img12 from '../../assets/img12.png';

import { Link } from 'react-router-dom';

export const Works = () => {
    return(
        <section className="default-works">
            <div className="section-works-area">
                <div className="section-title">Trabalhos</div>
                <div className="section-desc">Projetos Recentes</div>
                <div className="section-body">
                    <div className='project-item'>
                        <Link to='/works/project1'>
                            <div className="project-item--img"><img src={Img1} /></div>
                            <div className="project-item--title">Jogo da Memória</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project2'>
                            <div className="project-item--img"><img src={Img2} /></div>
                            <div className="project-item--title">Calculadora de IMC</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project3'>
                            <div className="project-item--img"><img src={Img3} /></div>
                            <div className="project-item--title">Bateria Eletrônica</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project4'>
                            <div className="project-item--img"><img src={Img4} /></div>
                            <div className="project-item--title">Desenhe no Canvas</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project5'>
                            <div className="project-item--img"><img src={Img5} /></div>
                            <div className="project-item--title">Quiz</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project6'>
                            <div className="project-item--img"><img src={Img6} /></div>
                            <div className="project-item--title">Clone - Formulário de Pesquisa</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project7'>
                            <div className="project-item--img"><img src={Img7} /></div>
                            <div className="project-item--title">Clone - Starbucks</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project8'>
                            <div className="project-item--img"><img src={Img8} /></div>
                            <div className="project-item--title">Clone - Medicenter</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project9'>
                            <div className="project-item--img"><img src={Img9} /></div>
                            <div className="project-item--title">Compra de Pizzas</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project10'>
                            <div className="project-item--img"><img src={Img10} /></div>
                            <div className="project-item--title">Relógio Analógico</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project11'>
                            <div className="project-item--img"><img src={Img11} /></div>
                            <div className="project-item--title">Urna Eletrônica</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                        <Link to='/works/project12'>
                            <div className="project-item--img"><img src={Img12} /></div>
                            <div className="project-item--title">Jogo da Velha</div>
                            <div className="project-item--button">Saiba mais</div>                
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}