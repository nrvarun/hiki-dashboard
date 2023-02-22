import { List } from "@mui/material";
import styled from "styled-components";

export const StyledReqstWrapper = styled.div`
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 8px;
  width: 100%;
  padding: 4px;
`;

export const StyledReqstHeader = styled.div`
  background: #f8fcff;
  border-radius: 4px;
`;

export const StyledReqstBody = styled.div`
  background: transparent;
  padding: 0 12px;
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledReqstDetail = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: #1c1c1c;
  margin: 12px 0;

  span {
    font-weight: 300;
    margin: 0 0 0 4px;
  }
`;

export const StyledTimeWrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 6px 8px;
  margin: 12px;
`;

export const StyledTimeList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;

  li {
    width: 25%;
    text-align: center;
    position: relative;

    &:after {
      position: absolute;
      top: 10%;
      right: 0;
      bottom: 0;
      content: "";
      width: 1px;
      height: 80%;
      background: #888888;
      opacity: 0.2;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;

export const StyledTimeDetail = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #1c1c1c;
`;

export const StyledTimeSheetList = styled(List)`
  max-height: 504px;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background: rgba(136, 136, 136, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.5);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(136, 136, 136, 0.1);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(136, 136, 136, 0.1);
  }
`;
