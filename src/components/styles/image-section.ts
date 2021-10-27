import styled from 'styled-components';

export const StyledImageSection = styled.div`
  display: flex;
  margin-top: 2rem;

  .left-content {
    width: 100%;
    height: 70vh;
    margin-right: 0.5rem;

    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }

    .paragraph {
      padding: 1rem 0;
      font-size: 1rem;
    }

    .about-info {
      display: flex;
      margin-bottom: 1rem;

      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }

      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
