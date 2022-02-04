import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
      }
      h6 {
        font-size: 1.2rem;
      }
    }
  }
`;
