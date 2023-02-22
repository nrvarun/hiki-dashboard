import styled from "styled-components";

export const StyledTdyTimeWrapper = styled.div`
  padding: 4px 0px;
  background: #f8fcff;
  border-radius: 4px;

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1c1c1c;
    padding: 0 12px;
  }
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTdyTimeHeading = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1c1c;
`;

export const StyledTdyTimeDetail = styled.p`
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

export const StyledFormLabel = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #1c1c1c;
`;

export const StyledLeaveApplnRadios = styled.div`
  .MuiFormControlLabel-root {
    width: 100%;
    text-align: center;
    position: relative;
  }

  .MuiRadio-root {
    position: absolute;
    opacity: 0;
    width: 100%;
  }

  .Mui-checked {
    & + .MuiTypography-root {
      color: #0052cc;
      background: rgba(0, 82, 204, 0.1);
      border: 1px solid #0052cc;
    }
  }

  .MuiTypography-root {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: rgba(136, 136, 136, 0.8);
    width: 100%;
    border: 1px solid rgba(136, 136, 136, 0.4);
    border-radius: 4px;
    padding: 10px 24px;
  }
`;
