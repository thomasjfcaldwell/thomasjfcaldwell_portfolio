import React, { Component } from 'react';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import About from './About'

class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
				<Navbar.Brand>
					<Link to={'/home'}>thomasjfcaldwell portfolio</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link>
							<Link to={'/contact'}>Contact</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to={'/about'}>About</Link>
							<Route
								exact
								path='/about'
								
							/>
						</Nav.Link>
						<NavDropdown title='Projects' id='collasible-nav-dropdown'>
							<NavDropdown.Item>
								<Link to={'/project1'}>Project 1</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to={'/project2'}>Project 2</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to={'/project3'}>Project 3</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
