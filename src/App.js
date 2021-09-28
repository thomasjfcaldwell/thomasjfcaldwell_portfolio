import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.scss';
import 'aos/dist/aos.css';
import Contact from './Contact';
import QuizGame from './Quizgame';
import Knowyourwizard from './Knowyourwizard';
import Fleet from './Fleet';
import FetchGoal from './FetchGoal';
import Picnics from './Picnics';
import Coffee from './Coffee';
import { FaGithubSquare,} from 'react-icons/fa';
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
					{/* <Header /> */}
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
					<Route exact path='/knowyourwizard' component={Knowyourwizard} />
					<Route exact path='/fleet' component={Fleet} />
					<Route exact path='/fetchgoal' component={FetchGoal} />
					<Route exact path='/picnics' component={Picnics} />
					<Route exact path='/coffee' component={Coffee} />
				</main> 
				{/* <footer>
					<div
						style={{
							marginTop: '9em',
							height: '190px',
							backgroundColor: '#727272',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<div>
							<a href='https://www.facebook.com/thomas.caldwell.1612'>
								<AiFillFacebook
									size={40}
									style={{
										margin: '50px',
										color: 'white',
									}}
								/>
							</a>
						</div>
						<div>
							<a href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'>
								<AiFillLinkedin
									size={40}
									style={{
										margin: '50px',
										color: 'white',
									}}
								/>
							</a>
						</div>
						<div>
							<a href='https://github.com/thomasjfcaldwell?tab=repositories'>
								<FaGithubSquare
									size={40}
									style={{
										margin: '50px',
										color: 'white',
									}}
								/>
							</a>
						</div>
					</div>
				</footer>  */}
			</div>
		);
	}
}

export default App;
