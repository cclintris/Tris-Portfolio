import React from 'react';
import { I_CardProps } from './props';
import { StyledCard } from './styles';

const Card: React.FC<I_CardProps> = ({
  image,
  title,
  paragraph,
}: I_CardProps): JSX.Element => {
  return (
    <StyledCard>
      <div className="container">
        <img src={image} alt="card pic" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
