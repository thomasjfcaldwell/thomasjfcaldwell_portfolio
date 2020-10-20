import React, { Component } from 'react';
import { Route, Router, Switch, Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import './App.scss';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<div>
				<Header />

				<Home />
				<main>
					<Route path='/contact' component={Contact} />
				</main>
			</div>
		);
	}
}

export default App;
