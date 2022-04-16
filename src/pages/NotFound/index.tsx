import './style.css';

export const NotFound = () => {
    return(
        <div className="error">
            <div className='error-cod'>
                <p>404</p>
            </div>
            
            <div className="error-msg">
                <h1>Ops!</h1>
                <h3>Desculpe, a página que está procurando não foi encontrada.</h3>
            </div>
        </div>
    );
}