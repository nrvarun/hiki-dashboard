import styled from "styled-components";

export const StyledNewsListings = styled.div`
  .slick-dots {
    bottom: -10px;

    li {
      button {
        width: 12px;
        height: 6px;
        background: #0052cc;
        opacity: 0.2;
        border-radius: 10px;
        transform: scaleX(0.5) scaleY(0.5);
        transition: transform 0.3s ease;
        transform-origin: left;

        &:before {
          display: none;
        }
      }

      &.slick-active button {
        opacity: 1;
        transform: scaleX(1) scaleY(0.7);
      }
    }
  }
`;

export const StyledNewsWrapper = styled.article`
  img {
    width: 100%;
    height: auto;
    max-height: 130px;
    display: block;
    margin: 0 0 24px 0;
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #1c1c1c;
    margin: 0 0 12px 0;
  }

  h3 {
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    color: #1c1c1c;
    margin: 0 0 40px 0;
  }
`;

export const StyledNewsAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;

  img {
    display: block;
    object-fit: cover;
    height: 24px;
    width: 24px;
    margin: 0 12px 0 0;
  }

  h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #1c1c1c;
    margin: 0 10px 0 0;
  }

  p {
    font-weight: 300;
    font-size: 8px;
    line-height: 10px;
    color: #1c1c1c;
    margin: 0;
  }
`;
