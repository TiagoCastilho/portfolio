import { useState, useEffect } from 'react';
import './style.css';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Project3 } from './Project3';
import { Project4 } from './Project4';
import { Project5 } from './Project5';
import { Project6 } from './Project6';
import { Project7 } from './Project7';
import { Project8 } from './Project8';


export const Works = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        loadProjects();
    }, []);
    
    const loadProjects = async () => {
        try {
            setLoading(true);
            let response = await fetch('http://localhost:3000/projects');
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

    function closeModal() {
        document.querySelector('.projectWindowArea').style.opacity = 0;
        setTimeout(()=>{
            document.querySelector('.projectWindowArea').style.display = 'none';
        },500);
    }
    document.querySelectorAll('.projectInfo--backButton, .projectInfo--backMobileButton').forEach((item)=> {
        item.addEventListener('click', closeModal);
    });

    return(
        <section className="default-works">
            <div className="section-works-area">
                <div className="section-title">Trabalhos</div>
                <div className="section-desc">Projetos Recentes</div>
                <div className="section-body">
                    <Project1>Conteúdo do Modal</Project1>
                </div>
            </div>
            <div className='model'>
                <div className='project-item'>
                    <a href="">
                        <div className="project-item--img"><img src="" /></div>
                        <div className="project-item--title"></div>
                        <div className="project-item--button">Saiba mais</div>                
                    </a>
                </div>
            </div>
        </section>
    );
}