import './style.css';
import './script';

export const Clock = () => {    
    return(
        <div className="clockarea">
            <p>Hora</p>
            <div className="clock">00:00:00</div>
        </div>
    );
}
export const Turn = () => {
    return(
        <div className='turn'>Olá...</div>
    );
}