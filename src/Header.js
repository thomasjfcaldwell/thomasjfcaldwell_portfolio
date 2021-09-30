import React, { Component } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/nav.css';
import portfolioLogo from './icons/portfoliologo.svg';
class Header extends Component {
	render() {
		return (
			<div>
				<Navbar className='navbar-container' collapseOnSelect expand='md'>
					<Navbar.Brand style={{ width: '50%' }}>
						<Link className='nav-link-text' to={'/'} expand='md'>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<Image style={{ width: '75%' }} src={portfolioLogo} />
							</div>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav' bg='transparent'>
						<Nav className='ml-auto mx-auto' bg='transparent'>
							<Link bg='transparent' className='nav-link-text' to={'/'}>
								Home
							</Link>

							<Link to={'/contact'} className='nav-link-text'>
								Contact
							</Link>
							<Link to={'/quizgame'} className='nav-link-text'>
								Projects
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
