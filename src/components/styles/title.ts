import styled from 'styled-components';

export const StyledTitle = styled.div`
  position: relative;

  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    /* text-transform: uppercase; */
    position: relative;
    padding-bottom: 0.8rem;
    &::before {
      content: '';
      width: 7.5rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 15px;
    }
    &::after {
      content: '';
      width: 3rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      position: absolute;
      bottom: 0;
      border-radius: 15px;
      left: 0;
    }

    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
    }
  }
`;
