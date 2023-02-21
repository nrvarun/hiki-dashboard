import React from "react";
import { StyledNewsAuthorWrapper, StyledNewsWrapper } from "./news.style";

type Props = {};

const NewsItem = (props: Props) => {
  return (
    <StyledNewsWrapper>
      <img src="/images/news-item.png" alt="news" />

      <StyledNewsAuthorWrapper>
        <img src="/images/users/1.png" alt="author" />
        <h4>Rafel Nadal</h4>
        <p>1 hr ago</p>
      </StyledNewsAuthorWrapper>

      <h2>Behind the IT dept’s tax evasion scrutiny</h2>
      <h3>
        The central board of direct taxes, the administrative body for the tax
        department...
      </h3>
    </StyledNewsWrapper>
  );
};

export default NewsItem;
