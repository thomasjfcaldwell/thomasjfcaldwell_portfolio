import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from './About';
import logo from './header.svg';
import Contact from './Contact'

class Header extends Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand='md'
				style={{
					minHeight: '5em',
					backgroundColor: 'white',
				}}>
				<Navbar.Brand>
					<Link
						to={'/'}
						expand='md'
						style={{
							fontFamily: 'Montserrat',
							fontSize: '1em',
							textTransform: 'uppercase',
							color: 'black',
						}}>
						thomas caldwell portfolio
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='mr-auto mx-auto'
						style={{
							fontFamily: 'Montserrat',
							fontSize: '0.3em',
							textTransform: 'uppercase',
							color: 'black',
							padding: '1em',
						}}>
						<Nav.Link>
							<Link
								to={'/contact'}

								style={{
									color: 'black',
								}}>
								Contact
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to={'/about'}
								style={{
									color: 'black',
								}}>
								About
							</Link>
							<Route exact path='/about' />
						</Nav.Link>
						<NavDropdown
							title='Projects'
							id='collapsible-nav-dropdown'
							style={{
								color: 'black',
								
							}}>
							<NavDropdown.Item
							>
								
								<Link
									to={'/quizgame'}
									style={{
										color: 'black',
										fontSize: '0.3em',
									}}>
									Quiz Game
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/knowyourwizard'}
									style={{
										color: 'black',
										fontSize: '0.3em',
									}}>
									Know Your Wizard
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/fleet'}
									style={{
										color: 'black',
										fontSize: '0.3em',
									}}>
									Fleet
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
