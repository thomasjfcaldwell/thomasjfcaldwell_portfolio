import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.scss';
import 'aos/dist/aos.css';
import Contact from './Contact';
import QuizGame from './Quizgame';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

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
					<Link to='/picnics'></Link>
					<Link to='/coffee'></Link>
					<Header />
				</nav>

				<main>
					<Route exact path='/' component={Home} />

					<Route exact path='/contact' component={Contact} />
					<Route
						exact
						path='/quizgame'
						render={() => {
							return <QuizGame />;
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
