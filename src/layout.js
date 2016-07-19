import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
export default React.createClass({
   displayName : 'Layout',
    render(){
        return(
            <div className="main">
                <section className="u-container__left">
                    <NavBar />
                    <Profile />
                </section>
                <section className="u-container">
                    {this.props.children}
                </section>
            </div>
        )
    }
});