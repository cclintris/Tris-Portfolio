import React from 'react';
import { StyledMenu } from './style';
import { I_MenuItemProps } from './interface';
import GitHub from '@material-ui/icons/GitHub';

const Menu: React.FC<I_MenuItemProps> = ({ menuItems }: I_MenuItemProps) => {
  return (
    <StyledMenu>
      {menuItems.map(({ id, image, link1, link2, title, text }) => (
        <div className="grid-item" key={id}>
          <div className="portfolio-content">
            <div className="portfolio-image">
              <img src={image} alt="" />
              <ul>
                <li>
                  <a href={link1}>
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a href={link2}></a>
                </li>
              </ul>
            </div>
            <h6>{title}</h6>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </StyledMenu>
  );
};

export default Menu;
