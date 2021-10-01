import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Row, Col, Container, Image } from 'react-bootstrap';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';
import Reactlogo from './icons/react.png';
import Bootstrap from './icons/bootstrap.png';
import Adobe from './icons/adobe.png';
import Wordpress from './icons/woodpress.png';
import BigCommerce from './icons/BigCommerce.png';
import Github from './icons/github.png';

import './style/Playingaround.css';
import './style/home.css';
import MySkills from './data/skills.json';

const Skills = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='flip-left'>
			<div className='headline-container'>
				<h1 className='headline'>SKILLS</h1>
			</div>
			{MySkills.map((SkillsInfo, id) => {
				return (
					<>
						<Container fluid className='skills-container'>
							
								<Col className='skills-col'>
									<div className='skills-info-container'>
										<p>{SkillsInfo.title}</p>
										<Image className='skillsImage' src={SkillsInfo.image} />
									</div>
								</Col>
							
						</Container>
					</>
				);
			})}
		</div>
	);
};

export default Skills;
