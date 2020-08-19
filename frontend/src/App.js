import React, { useState } from 'react'

import './App.css';

import backgroundImage from './assets/background.jpg'

import Header from './Componentes/Header'

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de web', 'Front-end web'])

    function handleAddProject(){
        
        setProjects([...projects, `Novo Projeto ${Date.now()}`])

    }

    return (
        <>
           <Header title ="Projects" />

           <img width="300" src={backgroundImage} alt="Imagem de fundo"/>

           <ul>
                {projects.map(project => <li key={project} >{project}</li>)}
           </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;