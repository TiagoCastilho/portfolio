import { useState, useEffect } from 'react';
import './db.json';
import './style.css';

export const Works = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadProjects();
    }, []);
    
    const loadProjects = async () => {
        try {
            setLoading(true);
            let response = await fetch('./db.json');
            let json = await response.json();
            setLoading(false);
            setProjects(json);
        } catch(e) {
            setLoading(false);
            setProjects([]);
            console.error(e);
        }
    }
    
    projects.map((item, index) => {
        let projectItem = document.querySelector('.project-item').cloneNode(true);

        projectItem.querySelector('.project-item--img img').src = item.url;
        projectItem.querySelector('.project-item--title').innerHTML = item.title;

        document.querySelector('.section-body').append( projectItem );
    });

    return(
        <section className="default-works">
            <div className="section-works-area">
                <div className="section-title">Trabalhos</div>
                <div className="section-desc">Projetos Recentes</div>
                <div className="section-body"></div>
            </div>
            <div className='model'>
                <div className='project-item'>
                    <a href="">
                        <div className="project-item--img"><img src="" /></div>
                        <div className="project-item--button"></div>
                    </a>
                    <div className="project-item--title"></div>                
                </div>
            </div>
        </section>
    );
}