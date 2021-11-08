import React from 'react';
import { StyledContactItem } from './style';
import { I_ContactItemProps } from './interface';

const ContactItem: React.FC<I_ContactItemProps> = ({
  icon,
  title,
  contact1,
  contact2,
}: I_ContactItemProps): JSX.Element => {
  return (
    <StyledContactItem>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </StyledContactItem>
  );
};

export default ContactItem;
