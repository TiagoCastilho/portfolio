import { Link } from "react-router-dom";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";

import './style.css';

export const Slide = () => {
    return(
        <div className="gallery items-4">
            <div id="item-1" className="control-operator"></div>
            <div id="item-2" className="control-operator"></div>
            <div id="item-3" className="control-operator"></div>
            <div id="item-4" className="control-operator"></div>

            <figure className="item">
                <h1><img src={Img1} alt="" /></h1>
                <Link className="buttom-item" to="/works/project1">Jogo da Memória</Link>
            </figure>

            <figure className="item">
                <h1><img src={Img2} alt="" /></h1>
                <Link className="buttom-item" to="/works/project2">Desenhe no Canvas</Link>
            </figure>

            <figure className="item">
                <h1><img src={Img3} alt="" /></h1>
                <Link className="buttom-item" to="/works/project3">Calcule o IMC</Link>
            </figure>

            <figure className="item">
                <h1><img src={Img4} alt="" /></h1>
                <Link className="buttom-item" to="/works/project4">Bateria</Link>
            </figure>

            <div className="controls">
                <a href="#item-1" className="control-button">•</a>
                <a href="#item-2" className="control-button">•</a>
                <a href="#item-3" className="control-button">•</a>
                <a href="#item-4" className="control-button">•</a>
            </div>
        </div>
    );
}