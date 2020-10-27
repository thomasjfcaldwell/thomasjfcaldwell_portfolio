import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

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
							fontSize: '1.5em',
							textTransform: 'uppercase',
							color: 'black',
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
						<NavDropdown
							title='Projects'
							id='collapsible-nav-dropdown'
							style={{
								color: 'black',
							}}>
							<NavDropdown.Item>
								<Link
									to={'/quizgame'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									Quiz Game
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/knowyourwizard'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									Know Your Wizard
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/fleet'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									Fleet
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/fetchgoal'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									FetchGoal
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
