import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import cert_algo from '../images/algo.png';
import cert_d3 from '../images/d3.png';
import cert_fcc_fe from '../images/fcc_fe_2.png';
import cert_fe_lib from '../images/fe_lib.png';
import cert_fullstack from '../images/fullstack.png';
import cert_isqa from '../images/isqa.png';
import cert_responsive from '../images/responsive.png';
import cert_api_micro from '../images/api_micro.png';
import { Row, Col } from 'reactstrap';

const certificates_data = [
  {
    src: cert_algo,
    title: 'JavaScript Algoritms and Data Structures Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/javascript-algorithms-and-data-structures'
  },
  {
    src: cert_d3,
    title: 'Data Visualization Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/data-visualization'
  },
  {
    src: cert_api_micro,
    title: 'APIs and Microservices Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/apis-and-microservices'
  },
  {
    src: cert_fcc_fe,
    title: 'Frontend Development Program Certification',
    url: 'https://www.freecodecamp.org/certification/gpbaculio/legacy-front-end'
  },
  {
    src: cert_fe_lib,
    title: 'Frontend Libraries Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/front-end-libraries'
  },
  {
    src: cert_fullstack,
    title: 'Fullstack Certification',
    url: 'https://www.freecodecamp.org/certification/gpbaculio/full-stack'
  },
  {
    src: cert_isqa,
    title: 'Information Security and Quality Assurance Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/information-security-and-quality-assurance'
  },
  {
    src: cert_responsive,
    title: 'Responsive Web Design Certification',
    url:
      'https://www.freecodecamp.org/certification/gpbaculio/responsive-web-design'
  }
];
const CertificatesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === certificates_data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? certificates_data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = certificates_data.map((cert_data, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        in={true}
        key={`${cert_data.title}-${i}`}>
        <div className='carousel-container'>
          <Row>
            <Col key={cert_data.src} xs='12' className='product-column'>
              <div className='product-item'>
                <img width='100%' src={cert_data.src} alt='' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-center my-2 d-block data-link'
                  href={cert_data.url}>
                  {cert_data.title}
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={certificates_data}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CertificatesSlider;
