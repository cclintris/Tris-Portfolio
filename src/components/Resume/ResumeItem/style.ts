import styled from 'styled-components';

export const StyledResumeItem = styled.div`
  /* display: flex; */
  margin-bottom: 1rem;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
  .up-content {
    width: 30%;
    padding-left: 20px;
    margin-bottom: 10px;
    position: relative;
    p {
      display: inline-block;
    }
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid orange;
      background-color: var(--background-dark-color);
    }
  }

  .down-content {
    position: relative;
    padding-left: 5rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      width: 3rem;
      height: 2px;
      background-color: orange;
    }

    h5 {
      color: var(--primary-color);
      font-size: 1.5rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
