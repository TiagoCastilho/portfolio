import { Link } from 'react-router-dom';
import './style.css';
import '../../assets/logo.png';

export const About = () => {
    return(
        <div className='default-about'>
            <div className="section-title">Quem somos</div>
            <div className="section-body">
            <div className="section-desc2"><h3>Desenvolvedores de soluções digitais.</h3></div>
            <div className="section-desc">Nossa jornada teve início em 2022. Apesar de recente, somos profissionais capacitados e focados no desenvolvimento de soluções digitais que conectem você ao usuário final. Utilizamos diferentes tecnologias e linguagens para criar soluções personalizadas e funcionais, com fácil navegação além de um belo design, é claro.</div>
            <div className="section-desc2"><h3>Alcance mais clientes com nossos serviços.</h3></div>
                <div className="section-aboutus">
                    <div className="section-aboutus--left">
                        <p><strong>Olá, meu nome é Tiago Castilho.</strong><br />
                        <br />
                        Após 12 anos no ramo de seguros, realizei transição de carreira seguindo meu sonho de ser programador.
                        <br />
                        Hoje, sou desenvolvedor Front-end e busco aperfeiçoamento diário para que consiga idealizar e desenvolver os seus sonhos.
                        <br />
                        <br />
                        Que tal trabalharmos juntos?
                        </p>
                        <Link to="/contact" className="buttom-about">Faça contato</Link>
                    </div>
                    <div className="section-aboutus--right"></div>
                </div>
            </div>
        </div>
    );
}