import React from 'react';
import { StyledImageSection } from './styles';
import Button from './Button';
import aboutme from '../assets/img/about-me.jpeg';
import { paragraph, info } from './data';
import { E_buttonType, E_buttonShape } from './configs/enum';

const ImageSection: React.FC = (): JSX.Element => {
  return (
    <StyledImageSection>
      <div className="left-content">
        <img src={aboutme} alt="about me" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Tristan Lin</span> ,
        </h4>
        <p className="paragraph">{paragraph}</p>
        <div className="about-info">
          <div className="info-title">
            {info.map(({ attr }, key) => (
              <p key={key}>{attr} </p>
            ))}
          </div>
          <div className="info">
            {info.map(({ value }, key) => (
              <p key={key}>: {value} </p>
            ))}
          </div>
        </div>
        <Button
          text="Download CV"
          type={E_buttonType.primary}
          shape={E_buttonShape.default}
        />
      </div>
    </StyledImageSection>
  );
};

export default ImageSection;
