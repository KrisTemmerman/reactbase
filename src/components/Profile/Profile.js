/**
 * Created by webdev on 19/07/16.
 */
import React from 'react';
const profPic = require('./../../images/profilepic.png');
export default React.createClass({
    render(){
        return(
            <section className="c-intro-block animated slideInLeft">
                <div className="c-intro-block-content">
                    <div className="c-intro-block-content--profile">
                        <img src={profPic}/>
                    </div>
                    <div className="c-intro-block-content--text">
                        <p> I'm Kris, <br/>
                            I'm a front-end developer <br/>
                            with a passion for <span className="red"> clean </span> code
                        </p>
                    </div>
                </div>
            </section>
        )
    }
});