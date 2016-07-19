import React from 'react';

export default React.createClass({
    render(){
        return(
            <nav className="c-navbar">
                    <ul className="c-navbar__menu">
                        <li className="c-navbar__menu__item ">
                            <a className="o-link c-navbar__menu__item__link c-navbar__menu__item__link--active" href="#">Home</a>
                        </li>
                        <li className="c-navbar__menu__item" >
                            <a className="o-link c-navbar__menu__item__link" href="#">Projects</a>
                        </li>
                        <li className="c-navbar__menu__item">
                            <a className="o-link c-navbar__menu__item__link" href="#">Skills</a>
                        </li>
                    </ul>
            </nav>
        )
    }
});