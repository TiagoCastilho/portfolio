import { Slide } from '../../components/Slide';
import './style.css';

export const Works = () => {
    return(
        <section className="default-works">
            <div className="section-team-area">
                <div className="section-title">Trabalhos</div>
                <div className="section-desc">Projetos Recentes</div>
                <div className="section-body">                   
                    <Slide />                    
                </div>
            </div>
        </section>
    );
}