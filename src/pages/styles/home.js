import styled from 'styled-components'

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .bg-particles {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`
