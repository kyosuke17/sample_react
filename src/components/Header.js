import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-deafult">
            <div className="container-fuild">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">ReactJS Todo List</a>
                </div>
            </div>
        </nav>
    );
}