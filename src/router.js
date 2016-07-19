/**
 * Created by webdev on 07/07/16.
 */
import React from 'react';
import Router from 'ampersand-router'
import IntroPage from './pages/introduction';
import SkillsPage from './pages/skills';
import Layout from './layout'
export default Router.extend({

    renderPage(page,opts={layout:true}){
        if(opts.layout){
            page = (
                <Layout>
                    {page}
                </Layout>
            )
        }
        React.render(page,document.body);
    },
   routes:{
       '' :'introduction',
       'skills': 'skills'
   },
    introduction(){
        /**
         * Add {layout: false} as prop to renderpage to remove the default layout
         *
         */
        this.renderPage(<IntroPage/>)
    },
    skills(){
        this.renderPage(<SkillsPage/>)
    }
});
