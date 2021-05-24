import React, { Component } from 'react';

import Typical from 'react-typical';

import './App.scss';
import Playingaround from './Playingaround';
import Projects from './Projects';
import Contact from './Contact';

class Home extends Component {
	render() {
		return (
			<>
				<div className='body'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
							justifyContent: 'center',
							backgroundColor: 'transparent',
							margin: '50px 0',
						}}>
						<h5
							style={{
								textTransform: 'uppercase',
								letterSpacing: '0.2em',
								fontWeight: '900',
							}}>
							Welcome To Thomas' Portfolio
						</h5>
						<p>
							Thomas is{' '}
							<Typical
								loop={Infinity}
								wrapper='b'
								steps={[
									'a Developer',
									1000,
									'a Creator',
									1000,
									'an Imaginer',
									1000,
									'Changing the world one line of code at a time',
									1000,
								]}
							/>
						</p>
					</div>
					<div
						style={{
							margin: '50px 0',
						}}>
						<Playingaround />
					</div>
					<div
						style={{
							margin: '50px 0',
						}}>
						<Projects />
					</div>
					<div>
						<Contact />
					</div>
				</div>
			</>
		);
	}
}

export default Home;
