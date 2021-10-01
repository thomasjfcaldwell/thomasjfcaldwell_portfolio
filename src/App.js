import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.scss';
import 'aos/dist/aos.css';
import Contact from './pages/contact/Contact';
import MyProjects from './MyProjects';

class App extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to='/contact'></Link>
					<Link to='/'></Link>
					<Link to='/myprojects'></Link>
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
						path='/myprojects'
						render={() => {
							return <MyProjects />;
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
