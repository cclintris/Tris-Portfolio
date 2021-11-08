import React from 'react';
import { StyledContact } from './styles';
import { MainLayout, InnerLayout } from '../styles/LayoutStyles';
import { Title } from '../components';
import { Button } from '../components';
import { E_buttonType, E_buttonShape } from '../components/Button/enum';
import { contactForm } from './config';
import { useForm } from '../hooks/useForm';
import { ContactItem } from '../components';
import { contactItems } from '../data';

const Contact: React.FC = (): JSX.Element => {
  const [renderFormUnit, isFormValid] = useForm(contactForm);

  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <StyledContact>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              {/* <h4>Get in touch with me ~</h4> */}
            </div>
            <form className="form">
              {renderFormUnit()}
              <div className="form-field-button">
                <Button
                  text="Submit"
                  shape={E_buttonShape.default}
                  type={E_buttonType.primary}
                  disabled={!isFormValid()}
                />
              </div>
            </form>
          </div>
          <div className="right-content">
            {contactItems.map(({ icon, title, contact1, contact2 }, key) => (
              <ContactItem
                icon={icon}
                title={title}
                contact1={contact1}
                contact2={contact2}
                key={key}
              />
            ))}
          </div>
        </InnerLayout>
      </StyledContact>
    </MainLayout>
  );
};

export default Contact;
