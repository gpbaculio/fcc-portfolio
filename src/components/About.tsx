import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import profile_pic from '../images/profile.jpg';
import CertificatesSlider from './CertificatesSlider';

import {
  FaGithubSquare,
  FaFreeCodeCamp,
  FaStackOverflow
} from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const About = () => {
  return (
    <section className='section-about position-relative' id='about'>
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
              <div className='d-flex my-2 flex-grow-1 justify-content-between w-100 flex-wrap'>
                <Button
                  outline
                  color='link'
                  size='sm'
                  className='d-flex align-items-center'>
                  <FaFreeCodeCamp className='btn-link mr-1' size='18px' />
                  <a
                    rel='noopener noreferrer'
                    className='data-link'
                    target='_blank'
                    href='https://www.freecodecamp.org/gpbaculio'>
                    {' '}
                    FreeCodeCamp
                  </a>
                </Button>
                <Button
                  outline
                  color='link'
                  size='sm'
                  className='d-flex align-items-center'>
                  <FaGithubSquare className='btn-link mr-1' size='18px' />
                  <a
                    rel='noopener noreferrer'
                    className='data-link'
                    target='_blank'
                    href='https://github.com/gpbaculio'>
                    {' '}
                    Github
                  </a>
                </Button>
                <Button
                  outline
                  color='link'
                  size='sm'
                  className='d-flex align-items-center'>
                  <FaStackOverflow className='btn-link mr-1' size='18px' />
                  <a
                    rel='noopener noreferrer'
                    className='data-link'
                    target='_blank'
                    href='https://stackoverflow.com/users/5288560/gpbaculio'>
                    {' '}
                    Stackoverflow
                  </a>
                </Button>
                <Button
                  outline
                  color='link'
                  size='sm'
                  className='d-flex align-items-center'>
                  <GoMail className='btn-link mr-1' size='18px' />
                  <a
                    rel='noopener noreferrer'
                    className='data-link'
                    target='_blank'
                    href='mailto:gpbaculio@gmail.com'>
                    {' '}
                    Gmail
                  </a>
                </Button>
              </div>
              <p className='text-justify about-pharagraph font-weight-light mb-0'>
                I have a degree in Bachelor of Science Major in Information
                Technology with concentration in Web Development. I further
                developed my frontend and backend skills on freecodecamp . I
                have used in my projects backend and frontend technologies such
                as Typescript, React, React Native, Redux, Apollo, Relay Modern,
                GraphQL, Mongoose, Express, etc.
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
