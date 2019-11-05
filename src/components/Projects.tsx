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
  CardText,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
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
import ProjectsPagination from './ProjectsPagination';
import {
  jestTesting,
  d3,
  html,
  frontendJavascript,
  css,
  responsive,
  backendTypescript,
  graphql,
  mochaTesting,
  chaiTesting,
  express,
  mongoose,
  backendJavascript
} from './constants';

import {
  frontendTypescript,
  react,
  reactNative,
  reactApollo,
  relayModern,
  redux,
  reduxThunk,
  reduxSaga
} from './constants';
import { getMaxListeners } from 'cluster';
import classNames from 'classnames';
const Projects = () => {
  const frontendFilters = [
    frontendTypescript,
    react,
    reactNative,
    reactApollo,
    relayModern,
    redux,
    reduxThunk,
    reduxSaga,
    jestTesting,
    d3,
    html,
    frontendJavascript,
    css,
    responsive
  ];
  const backendFilters = [
    backendTypescript,
    graphql,
    mochaTesting,
    chaiTesting,
    express,
    mongoose,
    backendJavascript
  ];
  const projects = [
    {
      title: 'CRUD App',
      tags: [html, frontendJavascript, css],
      src: img_project_1,
      features: ['CRUD todo'],
      github: 'https://github.com/gpbaculio/cs50-rn-project0',
      demo: 'https://codepen.io/glendonphilippbaculio/pen/ZEErzgd'
    },
    {
      title: 'Responsive Page',
      tags: [react, responsive, css, html],
      src: img_project_2,
      features: ['Responsive page'],
      github: 'https://github.com/gpbaculio/altmanager-landing-challenge',
      demo: 'https://amazing-varahamihira-59200e.netlify.com/'
    },
    {
      title: 'Responsive Page',
      tags: [react, responsive, css, html],
      src: img_project_3,
      features: ['Responsive page'],
      github: 'https://github.com/gpbaculio/growtiger-landing-css-challenge',
      demo: 'https://wizardly-volhard-6a976c.netlify.com/'
    },
    {
      title: 'CRUD App',
      tags: [
        react,
        reactApollo,
        responsive,
        css,
        html,
        graphql,
        mongoose,
        express
      ],
      src: img_project_4_apollo,
      note: 'Load unsafe scripts on visit',
      features: [
        'search',
        'signup/signin',
        'authentication',
        'CRUD todo',
        'pagination',
        'subscriptions'
      ],
      testAccount: { username: 'gpbaculio1320@gmail.com', password: 'abcd123' },
      github: 'https://github.com/gpbaculio/fullstack-apollo',
      demo: 'https://fullstack-apollo-graphql.herokuapp.com/'
    },
    {
      title: 'CRUD App',
      tags: [
        frontendTypescript,
        react,
        redux,
        reduxThunk,
        responsive,
        css,
        html,
        backendTypescript,
        express,
        mongoose
      ],
      src: img_project_5_thunk,
      features: [
        'search',
        'signup/signin',
        'authentication',
        'CRUD todo',
        'pagination'
      ],
      testAccount: { username: 'gpbaculio1320@gmail.com', password: 'abcd123' },
      github: 'https://github.com/gpbaculio/fullstack-react-tsx',
      demo: 'https://fullstack-react-tsx.herokuapp.com/'
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
            md='2'
            className='projects-filter position-relative d-flex flex-column flex-wrap'>
            <Form>
              <FormGroup>
                <Label for='frontend_filters' className='frontend-label'>
                  Frontend
                </Label>
                <div>
                  {frontendFilters.map(i => {
                    let label: string = i;
                    if (i.includes('typescript')) label = 'typescript';
                    if (i.includes('javascript')) label = 'javascript';
                    return (
                      <CustomInput
                        name={i}
                        key={`checkbox-${i}`}
                        className='m-1'
                        type='checkbox'
                        id={`${i}-checkbox`}
                        label={label}
                        value={i}
                        checked={checkedItems[i]}
                        onChange={handleChange}
                      />
                    );
                  })}
                </div>
              </FormGroup>
            </Form>
            <Form>
              <FormGroup>
                <Label for='backend_filters' className='backend-label'>
                  Backend
                </Label>
                <div>
                  {backendFilters.map(i => {
                    let label: string = i;
                    if (i.includes('typescript')) label = 'typescript';
                    if (i.includes('javascript')) label = 'javascript';
                    return (
                      <CustomInput
                        key={`checkbox-${i}`}
                        checked={checkedItems[i]}
                        name={i}
                        onChange={handleChange}
                        className='m-1'
                        type='checkbox'
                        value={i}
                        id={`${i}-checkbox`}
                        label={label}
                      />
                    );
                  })}
                </div>
              </FormGroup>
            </Form>
          </Col>
          <Col xs='9' md='10' className='projects-demo-col'>
            <div className='projects-demo'>
              {[
                ...(checkedProjectKeys.length ? filteredProjects : projects)
              ].map(prj => {
                const backendTags = prj.tags.filter(tg =>
                  backendFilters.includes(tg)
                );
                const frontendTags = prj.tags.filter(tg =>
                  frontendFilters.includes(tg)
                );
                console.log('backendTags ', backendTags);
                return (
                  <div className='project-container'>
                    <Card className='mx-auto'>
                      <CardImg top width='100%' src={prj.src} />
                      <CardBody className='project-card-body'>
                        <CardTitle className='d-flex justify-content-between flex-wrap align-items-center'>
                          <h5 className='mb-0'>{prj.title}</h5>
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
                        <CardText className='position-relative'>
                          <small className='font-weight-bold'>Features</small>
                          <div className='features-grid position-relative list-unstyled'>
                            {prj.features.map(f => (
                              <div className='small d-flex flex-wrap'>
                                &#9679; {`${f}`}
                              </div>
                            ))}
                          </div>
                          {prj.note && (
                            <small className='small font-weight-bold'>
                              IMPORTANT:{' '}
                              <span className='font-weight-lighter'>
                                {prj.note}
                              </span>
                            </small>
                          )}
                          {prj.testAccount && (
                            <div
                              className={classNames(
                                'mb-0 d-flex flex-wrap flex-column'
                              )}>
                              <small className='font-weight-bold'>
                                Test Account
                              </small>
                              <small>
                                username: {prj.testAccount.username}
                              </small>
                              <small>
                                password: {prj.testAccount.password}
                              </small>
                            </div>
                          )}
                          <div
                            className={classNames(
                              'project-tags mt-1 d-flex flex-wrap flex-column',
                              { hide: !frontendTags.length }
                            )}>
                            <small className='font-weight-bold'>Frontend</small>
                            <ul className='list-unstyled d-flex mb-0 flex-wrap'>
                              {frontendTags.map(tg => {
                                let label: string = tg;
                                if (tg.includes('typescript'))
                                  label = 'typescript';
                                if (tg.includes('javascript'))
                                  label = 'javascript';
                                return (
                                  <li>
                                    <Badge className='mr-2' color='info'>
                                      {label}
                                    </Badge>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div
                            className={classNames(
                              'project-tags mt-1 d-flex flex-wrap flex-column',
                              { hide: !backendTags.length }
                            )}>
                            <small className='font-weight-bold'>Backend</small>
                            <ul className='list-unstyled d-flex mb-0 flex-wrap'>
                              {backendTags.map(tg => {
                                let label: string = tg;
                                if (tg.includes('typescript'))
                                  label = 'typescript';
                                if (tg.includes('javascript'))
                                  label = 'javascript';
                                return (
                                  <li>
                                    <Badge className='mr-2' color='info'>
                                      {label}
                                    </Badge>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
            <ProjectsPagination />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
