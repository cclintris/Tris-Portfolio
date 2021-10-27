import React from 'react';
import { StyledImageSection } from './styles';
import PrimaryButton from './PrimaryButton';
import aboutme from '../assets/img/about-me.jpeg';

const ImageSection: React.FC = (): JSX.Element => {
  return (
    <StyledImageSection>
      <div className="left-content">
        <img src={aboutme} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Tristan Lin</span>
        </h4>
        <p className="paragraph">
          I am Tristan Lin, a software engineer focused and passionate in
          frontend web development. Loves coding, basketball, music and also a
          cat person!
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name </p>
            <p>Age </p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location </p>
            <p>Occupation</p>
          </div>
          <div className="info">
            <p>: Tristan Lin</p>
            <p>: 21</p>
            <p>: USA / Taiwan</p>
            <p>: English / Mandarin</p>
            <p>: Nanjing, China</p>
            <p>: NJU University Student (Senior)</p>
          </div>
        </div>
        <PrimaryButton text="Download CV" />
      </div>
    </StyledImageSection>
  );
};

export default ImageSection;
