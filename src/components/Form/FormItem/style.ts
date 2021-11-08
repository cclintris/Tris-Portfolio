import styled from 'styled-components';

export const StyledFormItem = styled.div`
  width: 100%;
  margin-top: 2rem;
  position: relative;

  input,
  textarea,
  span {
    font-size: 1rem;
  }

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

  span {
    color: #ef4824;
  }

  textarea {
    background: transparent;
    border: 1px solid var(--border-color);
    outline: none;
    color: inherit;
    width: 100%;
    padding: 0.8rem 1rem;
  }
`;
