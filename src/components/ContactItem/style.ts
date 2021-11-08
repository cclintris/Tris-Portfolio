import styled from 'styled-components';

export const StyledContactItem = styled.div`
  padding: 1.5rem;
  width: calc(100% - 5px);
  height: 200px;
  background-color: var(--background-dark-grey);
  border-radius: 40px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;
    box-shadow: 3px 3px 3px #bbb;
  }

  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }

  .right-content {
    p {
      padding: 0.1rem 0;
    }
  }
`;
