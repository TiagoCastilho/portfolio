import './style.css';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';
import skype from '../../assets/skype.png';
import whatsapp from '../../assets/whatsapp.png';

export const Contact = () => {
    return(
        <div className="default-contact">
            <div className="section-title">Contate-nos</div>
            <div className="section-desc">Situados em Volta Redonda - RJ</div>
            <div className="section-body">
                <div className="section-info-area">
                    <div className="section-social">
                        <a href="https://www.instagram.com/tiagocastilho_bm" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/in/tiagocastilhobm" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                        <a href="mailto:tiagocastilho_bm@hotmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" /></a>
                        <a href="https://join.skype.com/invite/AiHpT8nCVpff" target="_blank" rel="noopener noreferrer"><img src={skype} alt="" /></a>
                        <a href="https://wa.me/24988147858" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="" /></a>                                      
                    </div>                                    
                </div>                 
            </div>
            <div className='social-buttom'>
                <a href="https://wa.me/24988147858" target="_blank" rel="noopener noreferrer" className="buttom">Envie uma mensagem</a>
            </div> 
        </div>
    );
}