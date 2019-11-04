import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  CustomInput,
  CardImg,
  CardSubtitle,
  Badge,
  CardText
} from 'reactstrap';
import { FaExternalLinkAlt, FaGit, FaGithub } from 'react-icons/fa';
import img_project_1 from '../images/project_1.png';
import img_project_2 from '../images/project_2.png';
import img_project_3 from '../images/project_3.png';
import img_project_4_apollo from '../images/project_4_apollo.png';
import img_project_5_thunk from '../images/project_5_thunk.png';
import img_project_6_saga from '../images/project_6_saga.png';
import img_project_7 from '../images/project_7.png';
import img_project_8 from '../images/project_8.png';
import img_project_9 from '../images/project_9.png';
import img_project_10_tribute from '../images/project_10_tribute.png';
import img_project_11_tech_doc from '../images/project_11_tech_doc.png';
import img_project_12_product_landing from '../images/project_12_product_landing.png';
import img_project_13_surv_frm from '../images/project_13_surv_frm.png';
import img_project_14_rand_quote from '../images/project_14_rand_quote.png';
import img_project_15_calc from '../images/project_15_calc.png';
import img_project_16_drm_mch from '../images/project_16_drm_mch.png';
import img_project_17_md_prv from '../images/project_17_md_prv.png';
import img_project_18_pomodoro from '../images/project_18_pomodoro.png';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from 'react';
const Projects = () => {
  const frontendFilters = [
    'frontend-typescript',
    'react',
    'react-native',
    'react-apollo',
    'relay-modern',
    'redux',
    'redux-thunk',
    'redux-saga',
    'jest-testing',
    'd3',
    'html',
    'javascript',
    'css',
    'responsive'
  ];
  const backendFilters = [
    'backend-typescript',
    'graphql',
    'mocha-testing',
    'chai-testing',
    'express',
    'mongoose',
    'javascript'
  ];
  const projects = [
    {
      title: 'CRUD APP',
      tags: ['html', 'javascript'],
      src: img_project_1,
      github: 'https://github.com/gpbaculio/cs50-rn-project0',
      demo: 'https://codepen.io/glendonphilippbaculio/pen/ZEErzgd'
    },
    {
      title: 'Responsive Landing Page 1',
      tags: ['react', 'responsive', 'css', 'html'],
      src: img_project_2,
      github: 'https://github.com/gpbaculio/altmanager-landing-challenge',
      demo: 'https://amazing-varahamihira-59200e.netlify.com/'
    }
  ];
  const initial_value: {
    [key: string]: boolean;
  } = {};
  // initialize with keys of checkboxes set to false
  [...backendFilters, ...frontendFilters].forEach(k => {
    initial_value[k] = false;
  });
  const [checkedItems, setCheckedItems] = useState(initial_value); //plain object as state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked
    });
  };
  const checkedProjectKeys = Object.keys(checkedItems).filter(
    cI => checkedItems[cI] // returns true if checked
  );
  const filteredProjects = projects.filter(prj =>
    prj.tags.some(tag => checkedProjectKeys.includes(tag))
  );
  return (
    <section className='section-projects position-relative'>
      <Container className='projects-container'>
        <div className='d-flex justify-content-center'>
          <h4 className='text-center'>PROJECTS</h4>
        </div>
        <Row>
          <Col
            xs='3'
            className='projects-filter position-relative d-flex flex-column flex-wrap'>
            <Form>
              <FormGroup>
                <Label for='frontend_filters' className='frontend-label'>
                  Frontend
                </Label>
                <div>
                  {frontendFilters.map(i => (
                    <CustomInput
                      name={i}
                      key={`checkbox-${i}`}
                      className='m-1'
                      type='checkbox'
                      id={`${i}-checkbox`}
                      label={i.includes('typescript') ? 'typescript' : i}
                      value={i}
                      checked={checkedItems[i]}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </FormGroup>
            </Form>
            <Form>
              <FormGroup>
                <Label for='backend_filters' className='backend-label'>
                  Backend
                </Label>
                <div>
                  {backendFilters.map(i => (
                    <CustomInput
                      key={`checkbox-${i}`}
                      checked={checkedItems[i]}
                      name={i}
                      onChange={handleChange}
                      className='m-1'
                      type='checkbox'
                      value={i}
                      id={`${i}-checkbox`}
                      label={i.includes('typescript') ? 'typescript' : i}
                    />
                  ))}
                </div>
              </FormGroup>
            </Form>
          </Col>
          <Col xs='9' className='projects-demo'>
            <Row>
              {[
                ...(checkedProjectKeys.length ? filteredProjects : projects)
              ].map(prj => (
                <Col xs='12' lg='6'>
                  <Card>
                    <CardImg top width='100%' src={prj.src} />
                    <CardBody className='project-card-body'>
                      <CardTitle className='mb-0 d-flex justify-content-between'>
                        <h5>{prj.title}</h5>
                        <div className='d-flex'>
                          <a
                            className='project-link d-flex justify-content-center align-items-center mr-2'
                            title='view online'
                            href={prj.demo}
                            target='_blank'>
                            <FaExternalLinkAlt color='#fff' />
                          </a>
                          <a
                            className='project-link d-flex justify-content-center align-items-center'
                            title='view source'
                            href={prj.github}
                            target='_blank'>
                            <FaGithub color='#fff' />
                          </a>
                        </div>
                      </CardTitle>
                      <CardText>
                        <span className='project-tags mt-1 d-flex flex-wrap'>
                          {prj.tags.map(tg => (
                            <Badge className='mr-2' color='info'>
                              {tg}
                            </Badge>
                          ))}
                        </span>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
