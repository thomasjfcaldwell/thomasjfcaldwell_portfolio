import React, { Component } from 'react';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>Thomas Caldwell Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#features'>contact</Nav.Link>
						<Nav.Link href='#pricing'>About Thomas</Nav.Link>
						<NavDropdown title='Projects' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Project 1</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Project 2</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Project 3</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
