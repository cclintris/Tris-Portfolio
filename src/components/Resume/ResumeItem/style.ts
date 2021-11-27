import styled from 'styled-components';

export const StyledResumeItem = styled.div`
  display: flex;
  .left-content {
    width: 20%;
    p {
      display: inline-block;
    }
  }

  .right-content {
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
    }
  }
`;
