import React, { Component } from 'react';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from './About'
import logo from './header.svg'

class Header extends Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand='md'
				style={{
					minHeight: '10em',
					backgroundColor: 'white',
				}}>
				<Navbar.Brand>
					<Link to={'/home'} expand='md'>
						thomas caldwell portfolio
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto mx-auto'>
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
							
							<NavDropdown.Item>
								<Link to={'/project1'}>Quiz Game</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to={'/project2'}>Know Your Wizard</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to={'/project3'}>Fleet</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
