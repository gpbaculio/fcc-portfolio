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
  Badge
} from 'reactstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
import img_project_11_tech_doc from '../images/project_11_tech_doc.jpg';
import img_project_12_product_landing from '../images/project_12_product_landing.png';
import img_project_13_surv_frm from '../images/project_13_surv_frm.png';
import img_project_14_rand_quote from '../images/project_14_rand_quote.png';
import img_project_15_calc from '../images/project_15_calc.png';
import img_project_16_drm_mch from '../images/project_16_drm_mch.png';
import img_project_17_md_prv from '../images/project_17_md_prv.png';
import img_project_18_pomodoro from '../images/project_18_pomodoro.png';
import img_project_19_barchart from '../images/project_19_barchart.png';
import img_project_20_scatterplot from '../images/project_20_scatterplot.png';
import img_project_21_heatmap from '../images/project_21_heatmap.jpg';
import img_project_22_choropleth from '../images/project_22_choropleth.png';
import img_project_23_treemap from '../images/project_23_treemap.png';
import img_project_24_fileupload from '../images/project_24_fileupload.png';
import img_project_25_exercises_tracker from '../images/project_25_exercises_tracker.png';
import img_project_26_timestamp from '../images/project_26_timestamp.png';
import img_project_27_urlshortener from '../images/project_27_urlshortener.png';
import img_project_28_metric_imperial from '../images/project_28_metric_imperial.png';
import img_project_29_personal_lib from '../images/project_29_personal_lib.png';
import img_project_30_anonboard from '../images/project_30_anonboard.png';
import img_project_31_stockchecker from '../images/project_31_stockchecker.png';
import img_project_32_issue_tracker from '../images/project_32_issue_tracker.png';

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
      title: 'FCC React/Redux Calculator',
      tags: [frontendTypescript, react, redux, responsive, css],
      src: img_project_15_calc,
      features: ['calculator', 'responsive page'],
      github: 'https://github.com/gpbaculio/fcc-calculator',
      demo: 'https://relaxed-meitner-1b9510.netlify.com/'
    },
    {
      title: 'FCC Stock Price Checker',
      tags: [
        backendTypescript,
        frontendTypescript,
        mochaTesting,
        chaiTesting,
        d3,
        react,
        responsive,
        mongoose,
        express
      ],
      src: img_project_31_stockchecker,
      features: ['search stock symbol', 'view stock recent price'],
      github: 'https://github.com/gpbaculio/fcc-stockchecker/',
      demo: 'https://fcc-stockchecker.herokuapp.com/'
    },
    {
      title: 'FCC Anonymous Message Board',
      tags: [
        backendTypescript,
        frontendTypescript,
        mochaTesting,
        chaiTesting,
        jestTesting,
        react,
        redux,
        reduxSaga,
        responsive,
        mongoose,
        express
      ],
      src: img_project_30_anonboard,
      features: [
        'authentication',
        'CRUD board',
        'CRUD threads on board',
        'CRUD replies on thread',
        'search',
        'pagination'
      ],
      github: 'https://github.com/gpbaculio/fcc-anonmessageboard/',
      demo: 'https://fcc-anonmsg-board.herokuapp.com/'
    },
    {
      title: 'FCC Metric Imperial Converter',
      tags: [backendTypescript, chaiTesting, mochaTesting, express, html],
      src: img_project_28_metric_imperial,
      features: ['Metric imperial converter'],
      github: 'https://github.com/gpbaculio/fcc-metricimpconverter',
      demo: 'https://fcc-metric-imp-converter.herokuapp.com/'
    },
    {
      title: 'FCC Personal Library',
      tags: [
        graphql,
        mongoose,
        express,
        backendJavascript,
        react,
        relayModern,
        frontendJavascript
      ],
      src: img_project_29_personal_lib,
      features: [
        'CRUD book',
        'search',
        'comment section',
        'image upload',
        'authentication',
        'pagination'
      ],
      github: 'https://github.com/gpbaculio/fcc-personal-library',
      demo: 'https://fcc-personal-lib.herokuapp.com/'
    },
    {
      title: 'FCC Issue Tracker',
      tags: [
        backendTypescript,
        frontendTypescript,
        mochaTesting,
        chaiTesting,
        react,
        redux,
        mongoose,
        express
      ],
      src: img_project_32_issue_tracker,
      features: ['CRUD issue', 'search'],
      github: 'https://github.com/gpbaculio/fcc-issue-tracker',
      demo: 'https://fcc-issuetracker.herokuapp.com/'
    },
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
      title: 'React Apollo CRUD App',
      tags: [
        react,
        reactApollo,
        frontendJavascript,
        responsive,
        css,
        html,
        graphql,
        mongoose,
        express,
        backendJavascript
      ],
      src: img_project_4_apollo,
      note: 'Load unsafe scripts on site visit',
      features: [
        'search',
        'signup/signin',
        'authentication',
        'CRUD todo',
        'filter todos',
        'pagination',
        'subscriptions'
      ],
      testAccount: { username: 'gpbaculio1320@gmail.com', password: 'abcd123' },
      github: 'https://github.com/gpbaculio/fullstack-apollo',
      demo: 'https://fullstack-apollo-graphql.herokuapp.com/'
    },
    {
      title: 'Redux Thunk CRUD App',
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
        'filter todos',
        'pagination'
      ],
      testAccount: { username: 'gpbaculio1320@gmail.com', password: 'abcd123' },
      github: 'https://github.com/gpbaculio/fullstack-react-tsx',
      demo: 'https://fullstack-react-tsx.herokuapp.com/'
    },
    {
      title: 'Redux Saga CRUD App',
      tags: [
        react,
        redux,
        reduxSaga,
        frontendJavascript,
        responsive,
        css,
        html,
        backendJavascript,
        express,
        mongoose
      ],
      src: img_project_6_saga,
      features: [
        'search',
        'signup/signin',
        'authentication',
        'CRUD todo',
        'filter todos',
        'pagination'
      ],
      testAccount: { username: 'gpbaculio1320@gmail.com', password: 'abcd123' },
      github: 'https://github.com/gpbaculio/fullstack-redux-saga',
      demo: 'https://fullstack-redux.herokuapp.com/'
    },
    {
      title: 'React Native Pomodoro Clock',
      tags: [react, reactNative, css],
      src: img_project_7,
      features: ['work/break timer'],
      github: 'https://github.com/gpbaculio/cs50-rn-project1',
      demo: 'https://snack.expo.io/@gpbaculio/pomodoro-clock'
    },
    {
      title: 'React Native CRUD App',
      tags: [react, reactNative, css],
      src: img_project_8,
      features: ['CRUD todo', 'filter todos', 'mock authenticated login'],
      github: 'https://github.com/gpbaculio/cs50-reactnative-project3',
      demo: 'https://snack.expo.io/@gpbaculio/auth-flow_crud-app'
    },
    {
      title: 'React Native Movies info App',
      tags: [react, reactNative, css],
      src: img_project_9,
      features: ['search movies', 'view movie info'],
      github: 'https://github.com/gpbaculio/cs50-reactnative-project3',
      demo: 'https://snack.expo.io/@gpbaculio/auth-flow_crud-app'
    },
    {
      title: 'FCC Tribute Page',
      tags: [react, responsive, css],
      src: img_project_10_tribute,
      features: ['responsive page'],
      github: 'https://github.com/gpbaculio/fcc-tribute-page',
      demo: 'https://pedantic-nightingale-23e5f4.netlify.com/'
    },
    {
      title: 'FCC Technical Documentation Page',
      tags: [react, responsive, css],
      src: img_project_11_tech_doc,
      features: ['responsive page'],
      github: 'https://github.com/gpbaculio/fcc-technical-documentation',
      demo: 'https://kind-fermi-67d518.netlify.com/'
    },
    {
      title: 'FCC Product Landing Page',
      tags: [react, responsive, css],
      src: img_project_12_product_landing,
      features: ['responsive page'],
      github: 'https://github.com/gpbaculio/fcc-product-landing',
      demo: 'https://modest-meitner-308ee6.netlify.com/'
    },
    {
      title: 'FCC Survey Form',
      tags: [frontendTypescript, react, responsive, css],
      src: img_project_13_surv_frm,
      features: ['responsive page'],
      github: 'https://github.com/gpbaculio/fcc-survey-form',
      demo: 'https://reverent-bassi-e50301.netlify.com/'
    },
    {
      title: 'FCC Random Quote Machine',
      tags: [frontendTypescript, react, responsive, css],
      src: img_project_14_rand_quote,
      features: [
        'generate quote',
        'tweet quote',
        'share quote on tumblr',
        'responsive page'
      ],
      github: 'https://github.com/gpbaculio/fcc-randomquote',
      demo: 'https://relaxed-noyce-5bce24.netlify.com/'
    },
    {
      title: 'FCC Drum Machine',
      tags: [frontendTypescript, react, redux, responsive, css],
      src: img_project_16_drm_mch,
      features: ['responsive page', 'play audio on button click'],
      github: 'https://github.com/gpbaculio/fcc-drummachine',
      demo: 'https://vigorous-liskov-885125.netlify.com/'
    },
    {
      title: 'FCC Markdown Previewer',
      tags: [frontendTypescript, react, responsive, css],
      src: img_project_17_md_prv,
      features: ['preview code on edit', 'responsive page'],
      github: 'https://github.com/gpbaculio/fcc-markdownpreviewer',
      demo: 'https://practical-mccarthy-91d677.netlify.com/'
    },
    {
      title: 'FCC Pomodoro Clock',
      tags: [frontendTypescript, react, redux, responsive, css],
      src: img_project_18_pomodoro,
      features: ['session/break timer', 'responsive page'],
      github: 'https://github.com/gpbaculio/fcc-pomodoroclock',
      demo: 'https://mystifying-lumiere-3392fe.netlify.com/'
    },
    {
      title: 'FCC Bar Chart',
      tags: [frontendTypescript, react, d3, css],
      src: img_project_19_barchart,
      features: ['United States GDP D3 Bar Chart'],
      github: 'https://github.com/gpbaculio/fcc-barchart',
      demo: 'https://wonderful-wilson-aaa953.netlify.com/'
    },
    {
      title: 'FCC Scatterplot Graph',
      tags: [frontendTypescript, react, d3, css],
      src: img_project_20_scatterplot,
      features: ['Doping in Professional Bicycle Racing D3 Scatterplot Graph'],
      github: 'https://github.com/gpbaculio/fcc-scatterplotgraph',
      demo: 'https://upbeat-pare-cde4fc.netlify.com/'
    },
    {
      title: 'FCC Heat Map',
      tags: [frontendTypescript, react, d3, css],
      src: img_project_21_heatmap,
      features: ['Monthly Global Land-Surface Temperature D3 Heat Map'],
      github: 'https://github.com/gpbaculio/fcc-heatmap',
      demo: 'https://ecstatic-mayer-b5d31c.netlify.com/'
    },
    {
      title: 'FCC Choropleth Map',
      tags: [frontendTypescript, react, d3, css],
      src: img_project_22_choropleth,
      features: ['USA Educational Attainment D3 Choropleth Map'],
      github: 'https://github.com/gpbaculio/fcc-choroplethmap',
      demo: 'https://upbeat-kalam-7a1ef6.netlify.com/'
    },
    {
      title: 'FCC Treemap Diagram',
      tags: [frontendTypescript, react, d3, css],
      src: img_project_23_treemap,
      features: ['Video Games Sales Data Top 100 D3 Treemap Diagram'],
      github: 'https://github.com/gpbaculio/fcc-treemap',
      demo: 'https://stupefied-villani-26027b.netlify.com/'
    },
    {
      title: 'FCC File Metadata Microservice',
      tags: [backendTypescript, mongoose, express, html],
      src: img_project_24_fileupload,
      features: ['Analyse file uploaded'],
      github: 'https://github.com/gpbaculio/fcc-fileupload',
      demo: 'https://fcc-fle-mtdata.herokuapp.com/'
    },
    {
      title: 'FCC Exercise Tracker',
      tags: [backendTypescript, mongoose, express, html],
      src: img_project_25_exercises_tracker,
      features: ['Track user exercise logs'],
      github: 'https://github.com/gpbaculio/fcc-exercise-tracker',
      demo: 'https://fcc-exrcs-tracker.herokuapp.com/'
    },
    {
      title: 'FCC Timestamp Microservice',
      tags: [backendTypescript, express, html],
      src: img_project_26_timestamp,
      features: ['Generate timestamp'],
      github: 'https://github.com/gpbaculio/fcc-timestamp-api',
      demo: 'https://desolate-plains-28543.herokuapp.com/'
    },
    {
      title: 'FCC URL Shortener',
      tags: [backendTypescript, mongoose, express, html],
      src: img_project_27_urlshortener,
      features: ['Track user exercise logs'],
      github: 'https://github.com/gpbaculio/fcc-url-shortener',
      demo: 'https://fcc-url-shrtnr.herokuapp.com/'
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

  const checkedProjectKeys = Object.keys(checkedItems).filter(
    cI => checkedItems[cI] // returns true if checked
  );
  const filteredProjects = projects.filter(prj =>
    prj.tags.some(tag => checkedProjectKeys.includes(tag))
  );
  const [currentPage, setPage] = useState(1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked
    });
    setPage(1);
  };
  const handPageClick = (page: number) => {
    setPage(page);
  };
  // Logic for displaying todos
  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = [
    ...(checkedProjectKeys.length ? filteredProjects : projects)
  ].slice(indexOfFirstProject, indexOfLastProject);
  return (
    <section className='section-projects position-relative mb-5' id='projects'>
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
          <Col xs='9' md='10' className='projects-demo-col d-flex flex-column'>
            <div className='projects-demo'>
              {currentProjects.map(prj => {
                const backendTags = prj.tags.filter(tg =>
                  backendFilters.includes(tg)
                );
                const frontendTags = prj.tags.filter(tg =>
                  frontendFilters.includes(tg)
                );
                return (
                  <div key={prj.title} className='project-container'>
                    <Card className='mx-auto'>
                      <div className='w-100 position-relative project-links-container'>
                        <CardImg
                          top
                          width='100%'
                          className='project-image'
                          src={prj.src}
                        />
                        <div className='d-flex project-links'>
                          <a
                            rel='noopener noreferrer'
                            className='project-link d-flex justify-content-center align-items-center mr-2'
                            title='view online'
                            href={prj.demo}
                            target='_blank'>
                            <FaExternalLinkAlt color='#fff' />
                          </a>
                          <a
                            rel='noopener noreferrer'
                            className='project-link d-flex justify-content-center align-items-center'
                            title='view source'
                            href={prj.github}
                            target='_blank'>
                            <FaGithub color='#fff' />
                          </a>
                        </div>
                      </div>
                      <CardBody className='project-card-body d-flex flex-column'>
                        <CardTitle className='d-flex justify-content-between flex-wrap align-items-center'>
                          <h5 className='mb-0'>{prj.title}</h5>
                        </CardTitle>
                        <div className='position-relative d-flex flex-column justify-content-between flex-grow-1'>
                          <div className='features-container'>
                            <small className='font-weight-bold'>Features</small>
                            <div
                              className={classNames(
                                'position-relative list-unstyled',
                                {
                                  'features-grid': prj.features.length > 1,
                                  'd-flex flex-wrap': prj.features.length === 1
                                }
                              )}>
                              {prj.features.map(f => (
                                <div key={f} className='small d-flex flex-wrap'>
                                  &#9679; {`${f}`}
                                </div>
                              ))}
                            </div>
                          </div>
                          {prj.note && (
                            <>
                              <small className='mt-2 font-weight-bold'>
                                Important{' '}
                              </small>
                              <small className='font-weight-lighter'>
                                {prj.note}
                              </small>
                            </>
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
                                  <li key={tg}>
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
                                  <li key={tg}>
                                    <Badge className='mr-2' color='info'>
                                      {label}
                                    </Badge>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
            <ProjectsPagination
              handPageClick={handPageClick}
              currentPage={currentPage}
              projects={[
                ...(checkedProjectKeys.length ? filteredProjects : projects)
              ]}
              projectsPerPage={projectsPerPage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
