import React from 'react';
import { StyledContact } from './styles';
import { MainLayout, InnerLayout } from '../styles/LayoutStyles';
import Title from '../components/Title';
import Button from '../components/Button';
import { E_buttonType, E_buttonShape } from '../components/configs/enum';

const Contact: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <StyledContact>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in touch with me ~</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Enter your name*
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email" id="name">
                  Enter your email*
                </label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject" id="subject">
                  Enter your subject
                </label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
              <div className="form-field">
                <Button
                  text="Send email"
                  shape={E_buttonShape.default}
                  type={E_buttonType.primary}
                />
              </div>
            </form>
          </div>
          <div className="right-content"></div>
        </InnerLayout>
      </StyledContact>
    </MainLayout>
  );
};

export default Contact;
