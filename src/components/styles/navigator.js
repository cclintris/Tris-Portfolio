import styled from 'styled-components'

export const StyledNavigator = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 5px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    li {
      display: block;

      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 2;
        &:hover {
          cursor: pointer;
        }
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          /* height: 50%; */
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 1;
          opacity: 0.2;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }

    .active-class {
      background-color: var(--primary-color);
      opacity: 0.8;
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;

    p {
      display: block;
      text-align: center;
      padding: 1rem 0;
      font-size: 1rem;
    }
  }
`
