import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './Header';
import Home from './Home'
import About from './About'
import './App.scss';


class App extends Component {
	render() {
		return (
			<div className ='body'> 
				<Header />
				<Route
					path='/about'
					render={() => {
						return <About return />;
					}}
				/>
				<div className='container'>
					<Home />
				</div>
			</div>
		);
	}
}

export default App;
