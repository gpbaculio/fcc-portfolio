import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profile_pic from '../images/profile.jpg';
import CertificatesSlider from './CertificatesSlider';

const About = () => {
  return (
    <section className='section-about position-relative'>
      <Container className='about-container'>
        <div className='d-flex justify-content-center'>
          <h4 className='text-center'>ABOUT</h4>
        </div>
        <Row>
          <Col xs='12' sm='12' md='12' lg='6'>
            <div className='about-me-container position-relative h-100 d-flex justify-content-around flex-column align-items-center'>
              <img
                className='profile-pic'
                width='200'
                height='200'
                src={profile_pic}
                alt=''
              />
              <p className='text-justify about-pharagraph font-weight-light mb-0'>
                I have a degree in Bachelor of Science Major in Information
                Technology with concentration in Web Development. Developed my
                frontend and backend skills in{' '}
                <a
                  className='data-link'
                  target='_blank'
                  href='https://www.freecodecamp.org/gpbaculio'>
                  freecodecamp
                </a>
                . I have used in my projects backend and frontend technologies
                such as Typescript, React, React Native, Redux, Apollo, Relay
                Modern, GraphQL, Mongoose, Express, etc.
              </p>
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6'>
            <div className='certificates-container position-relative d-flex align-items-center'>
              <CertificatesSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
