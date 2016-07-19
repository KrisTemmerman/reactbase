import React from 'react'
import Router from './router'
import app from 'ampersand-app'
import './styles/tools/animate.css'
import './styles/styles.scss'

app.extend({
	init(){
		this.router = new Router();
		this.router.history.start()
	}
});
app.init();