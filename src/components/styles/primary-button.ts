import styled from 'styled-components';

export const StyledPrimaryButton = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  /* text-transform: uppercase; */
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
    transition: all 0.4s ease-in-out;
  }
`;
