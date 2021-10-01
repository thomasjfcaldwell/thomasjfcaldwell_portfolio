import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Row, Col, Container, Image, Card } from 'react-bootstrap';

import './style/skills.css';
import './style/home.css';
import MySkills from './data/skills.json';

const Skills = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='flip-left'>
			<div className='skills-headline-container'>
				<h1 className='headline'>SKILLS</h1>
			</div>
			<Container fluid className='skills-container'>
				{MySkills.map((SkillsInfo, id) => {
					return (
						<>
							
								<Card className='bg-transparent border-0' id='skills-card'>
									<Card.Text className='skills-card-text'>
										{SkillsInfo.title}
									</Card.Text>

									<Image className='skillsImage' src={SkillsInfo.image} />
								</Card>
							
						</>
					);
				})}
			</Container>
			{/* <Container fluid className='skills-container'>
				{MySkills.slice(5, 9).map((SkillsInfo, id) => {
					return (
						<>
							<Card lg={4} sm={6}>
								<Card.Text>{SkillsInfo.title}</Card.Text>

								<Image className='skillsImage' src={SkillsInfo.image} />
							</Card>
						</>
					);
				})}
			</Container>
			<Container fluid className='skills-container'>
				{MySkills.slice(5, 9).map((SkillsInfo, id) => {
					return (
						<>
							<Card lg={4} sm={6} className="skills-card">
								<Card.Text>{SkillsInfo.title}</Card.Text>

								<Image className='skillsImage' src={SkillsInfo.image} />
							</Card>
						</>
					);
				})}
			</Container> */}
		</div>
	);
};

export default Skills;
