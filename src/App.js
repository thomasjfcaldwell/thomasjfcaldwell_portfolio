import React, { Component } from 'react';
import { Route, BrowserRouter as Router,  Link, } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.scss';
import Contact from './Contact';
import QuizGame from './Quizgame';
import Knowyourwizard from './Knowyourwizard';
import Fleet from './Fleet';
import FetchGoal from './FetchGoal';
class App extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to='/contact'></Link>
					<Link to='/'></Link>
					<Link to='/quizgame'></Link>
					<Link to='/knowyourwizard'></Link>
					<Link to='/fleet'></Link>
					<Link to='/fetchgoal'></Link>
				</nav>

				<main>
					<Header />

					<Route exact path='/' component={Home} />

					<Route exact path='/contact' component={Contact} />
					<Route exact path='/quizgame' component={QuizGame} />
					<Route exact path='/knowyourwizard' component={Knowyourwizard} />
					<Route exact path='/fleet' component={Fleet} />
					<Route exact path='/fetchgoal' component={FetchGoal} />
				</main>
			</div>
		);
	}
}

export default App;
