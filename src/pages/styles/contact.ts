import styled from 'styled-components';

export const StyledContact = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .contact-title {
      h4 {
        color: var(--color-white);
        padding: 1rem 0;
        font-size: 1.5rem;
      }
    }

    .form {
      width: 100%;

      .form-field {
        width: 100%;
        margin-top: 2rem;
        position: relative;

        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }

        input {
          width: 100%;
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          color: inherit;
        }

        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;
