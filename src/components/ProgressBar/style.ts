import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  .skill-desc {
    display: flex;
    align-items: center;
    img {
      margin-right: 1rem;
    }
    h6 {
      padding: 0;
    }
  }

  .progress-bar {
    display: flex;
    align-items: center;
    margin-top: 10px;

    p {
      padding-right: 1.1rem;
    }

    .progress {
      position: relative;
      width: 100%;
      height: 0.3rem;
      background-color: var(--border-color);
      border-radius: 40px;
      span {
        background-color: var(--primary-color);
        height: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: inherit;
      }
    }
  }
`;
