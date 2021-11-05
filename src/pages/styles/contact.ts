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
