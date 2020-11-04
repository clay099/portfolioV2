import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import SkillImg from '../Image/SkillImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          {Object.keys(skills).map((skillType) => {
            return (
              <>
                <h4 className="skills-wrapper__text-title">{skillType}</h4>
                <hr />
                <Row>
                  {skills[skillType].map((skill) => (
                    <Col xl={2} lg={3} sm={4}>
                      <Fade bottom duration={1000} delay={500} distance="30px">
                        <div className="skill-wrapper__image">
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 100,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <SkillImg alt="skill logo" filename={`skills/${skill}.png`} />
                            </div>
                          </Tilt>
                        </div>
                        <p className="pt-2 skills-wrapper__text-name">{skill}</p>
                      </Fade>
                    </Col>
                  ))}
                </Row>
              </>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
