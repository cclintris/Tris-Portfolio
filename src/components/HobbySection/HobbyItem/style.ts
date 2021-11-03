import styled from 'styled-components';

export const StyledHobbyItem = styled.div`
  padding: 1rem 2rem;
  border: 6px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
  margin-right: 1rem;
  opacity: 0.8;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  p {
    margin-left: 1rem;
    font-size: 20px;
  }
`;
