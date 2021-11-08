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
    border-radius: 15px;
    outline: none;
    /* background: transparent; */
    background-color: var(--background-dark-color);
    height: 50px;
    padding: 0 15px;
    color: inherit;
  }

  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: var(--font-light-color) !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }

  span {
    color: #ef4824;
  }

  textarea {
    /* background: transparent; */
    background-color: var(--background-dark-color);
    border-radius: 15px;
    border: 1px solid var(--border-color);
    outline: none;
    color: inherit;
    width: 100%;
    padding: 0.8rem 1rem;
  }
`;
