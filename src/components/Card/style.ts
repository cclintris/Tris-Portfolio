import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: var(--background-dark-grey);
  margin-right: 0.8rem;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  transition: all 0.2s ease-in-out;
  border-radius: 30px;
  &:hover {
    border-top: 8px solid var(--primary-color);
    cursor: pointer;
    transform: translateY(3px);
  }

  .container {
    padding: 1.2rem;

    h4 {
      font-size: 1.3rem;
      color: var(--white-color);
      padding: 1rem 0;
      position: relative;
      padding-bottom: 1rem;
      &::after {
        content: '';
        width: 2rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      font-size: 1rem;
      padding: 0.8rem 0 0 0;
    }
  }
`;
