import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#/todos" className="nav-link">Tarefas</a>
                    </li>
                    <li className="nav-item"><a href="#/about" className="nav-link">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)