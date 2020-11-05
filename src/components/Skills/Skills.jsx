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
          {skills.map((skillGroup) => {
            const { id, heading, skillList } = skillGroup;
            return (
              <div key={id}>
                <h4 className="skills-wrapper__text-title">{heading}</h4>
                <hr />
                <Row>
                  {skillList.map((skill) => {
                    const { skillId, name } = skill;
                    return (
                      <Col xl={2} lg={3} sm={4} key={skillId}>
                        <Fade bottom duration={1000} delay={500} distance="30px">
                          <div className="skill-wrapper__image">
                            <Tilt
                              options={{
                                reverse: false,
                                max: 20,
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
                                <SkillImg alt="skill logo" filename={`skills/${name}.png`} />
                              </div>
                            </Tilt>
                          </div>
                          <p className="pt-2 skills-wrapper__text-name">{name}</p>
                        </Fade>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
