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
