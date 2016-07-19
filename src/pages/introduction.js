/**
 * Created by webdev on 07/07/16.
 */
import React from 'react'
export default React.createClass({
   render(){
       return(
           <div className="animated slideInUp">
               <section className="c-about-block">
                   <div>
                       <h4 className="o-heading"> Who?</h4>
                       <p>Hello, I'm a front-end developer from Genk, Belgium. I love to explore the nooks and crannies of the web. I constantly try to learn new things.</p>
                       <p> My skillset is defined by <em>HTML5</em> <em>CSS3</em> <em>SASS</em> <em>LESS</em> <em>JQuery</em> <em>Gulp</em> <em>Bower</em> and <em> Webpack </em>. I started working with <em> Laravel 5</em> to get a REST API up and running.</p>
                       <p> I write my styles in <em>sass</em> with <em> Inverted Triangle CSS</em> and <em> BEM </em> as structural inspiration.</p>
                           <p>
                               I'm currently updating my skillset with <em> React JS </em> and <em> Angular 2 </em>.
                           </p>
                           <p> I'm a very social guy, I'm always ready to help </p>
                   </div>
               </section>

               <section className="c-skills">
                   <h3 className="o-heading">Last Projects</h3>
                   <h4 className="o-heading">
                       <p>Deathstar </p>
                   </h4>
                    <p>For the last couple of weeks I've been working a BOT-Type software to aid people in a chatroom. <br/>
                    On <a href="#">Discord</a> (a chat client I use regularly) I've created a bot named deathstar. </p>

                       <ul>
                           <li>Stores and returns links for each user in a NoSql database</li>
                           <li>Has a roll function that rolls a number between a start and an endpoint</li>
                           <li>Has an eightball function that answers a submitted question</li>
                           <li>Has roulette function that iterates an array of objects and returns a random object</li>
                       </ul>


                </section>
           </div>

       )
   }

})