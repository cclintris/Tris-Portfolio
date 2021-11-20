import styled from 'styled-components';

export const StyledSkill = styled.section`
  .skills {
    /* width: 100%; */
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 3rem;
  }

  .accordion {
    background-color: rgb(0, 30, 60);
    color: var(--white-color);
    border-bottom: 1px solid var(--border-color);

    .accordion-summary {
      border-bottom: 1px solid var(--border-color);
    }

    .typo {
      font-size: 1rem;
    }
  }
`;
