import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand='md'  style={{
				
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
						THOMAS CALDWELL
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' bg='transparent'>
					<Nav
						className='mr-auto mx-auto'
						bg='transparent'
						style={{
							fontFamily: 'Montserrat',
							fontSize: '1.5em',
							textTransform: 'uppercase',
							color: 'black',
						}}>
						<Nav.Link>
							<Link
								bg='transparent'
								to={'/'}
								style={{
									color: 'black',
								}}>
								Home
							</Link>
						</Nav.Link>
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
								fontSize: '0.8em',
								marginTop: '4px',
								backgroundColor: 'transparent',
								border: 'none',
							}}>
							<NavDropdown.Item>
								<Link
									to={'/quizgame'}
									style={{
										color: 'black',
										fontSize: '0.8em',
										// backgroundColor:'blue'
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
							<NavDropdown.Item>
								<Link
									to={'/picnics'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									Pop Up Picnics
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link
									to={'/coffee'}
									style={{
										color: 'black',
										fontSize: '0.8em',
									}}>
									Need Coffee??
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
