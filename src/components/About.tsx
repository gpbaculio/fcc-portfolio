import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profile_pic from '../images/profile.jpg';

import cert_algo from '../images/algo.png';
import cert_d3 from '../images/d3.png';
import cert_fcc_fe from '../images/fcc_fe.png';
import cert_fe_lib from '../images/fe_lib.png';
import cert_fullstack from '../images/fullstack.png';
import cert_isqa from '../images/isqa.png';
import cert_responsive from '../images/responsive.png';

const certificates_data = [
  [
    {
      src: cert_algo,
      title: 'JavaScript Algoritms and Data Structures Certification',
      date_issued: 'April 5, 2019'
    },
    {
      src: cert_d3,
      name: 'Data Visualization Certification',
      date_issued: 'May 24, 2019'
    },
    {
      src: cert_fcc_fe,
      name: 'Frontend Development Program Certification',
      date_issued: 'September 26, 2017'
    },
    {
      src: cert_fe_lib,
      name: 'Frontend Libraries Certification',
      date_issued: 'April 21, 2019'
    },
    {
      src: cert_fullstack,
      name: 'Fullstack Certification',
      date_issued: 'November 2, 2019'
    },
    {
      src: cert_isqa,
      name: 'Information Security and Quality Assurance Certification',
      date_issued: 'November 1, 2019'
    },
    {
      src: cert_responsive,
      name: 'Responsive Web Design Certification',
      date_issued: 'November 1, 2019'
    }
  ]
];
const About = () => {
  return (
    <section className='section-about position-relative'>
      <Container className='about-container'>
        <div className='d-flex justify-content-center'>
          <h4 className='text-center'>About</h4>
        </div>
        <Row>
          <Col>
            <Row>
              <Col xs='12' sm='6'>
                <img width='100%' src={profile_pic} alt='' />
              </Col>
              <Col xs='12' sm='6'>
                <p className='text-justify about-pharagraph font-weight-light'>
                  I got into web development in college and have a degree on
                  Bachelor of Science Major in Information Technology. Developed
                  my frontend and backend skills in{' '}
                  <a
                    target='_blank'
                    href='https://www.freecodecamp.org/gpbaculio'>
                    freecodecamp
                  </a>{' '}
                  and decided I want to be a React/React Native Developer. I
                  have used backend and frontend technologies on their
                  challenges and personal learning such as Typescript, React,
                  React Native, Redux, Apollo, Relay Modern, GraphQL, Mongoose,
                  Express, etc.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className='certificates-container position-relative pt-2'>
              <h5 className='text-center'>Certificates</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
