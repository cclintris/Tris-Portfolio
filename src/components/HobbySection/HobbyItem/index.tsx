import React from 'react';
import { StyledHobbyItem } from './style';
import { I_HobbyItemProps } from './interface';

const ReviewItem: React.FC<I_HobbyItemProps> = ({
  title,
  image,
}: I_HobbyItemProps): JSX.Element => {
  return (
    <StyledHobbyItem>
      <img src={image} alt="hobby item" />
      <p>{title}</p>
    </StyledHobbyItem>
  );
};

export default ReviewItem;
