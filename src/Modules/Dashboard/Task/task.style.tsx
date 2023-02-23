import styled from "styled-components";

export const StyledTasksWrapper = styled.div`
  background: #f8fcff;
  border-radius: 8px;
  padding: 16px 48px;
`;

export const StyledTaskSummary = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #1c1c1c;
  text-align: center;
  margin: 0;

  span {
    font-weight: 600;
  }
`;

export const StyledTaskBarSummary = styled.p<{ color?: string }>`
  font-size: 12px;
  line-height: 150%;
  font-weight: 500;
  color: #1c1c1c;
  margin: 0;

  span {
    font-size: 14px;
    display: block;
    margin: 0 0 2px 0;
    font-weight: 700;
    text-decoration-line: underline;
    color: ${({ color }) => (color ? color : "#0052cc")};
  }
`;

export const StyledTaskBarWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  border-radius: 8px;
  min-height: 14px;
  margin: 0 0 4px 0;

  .multicolor-bar {
    margin: 0;
  }

  .multicolor-bar .values {
    .value {
      float: left;
      text-align: right;
    }
  }

  .multicolor-bar .scale .graduation {
    float: left;
    text-align: right;
  }

  .multicolor-bar .bars .bar {
    float: left;
    height: 10px;
  }

  .multicolor-bar .bars div.bar:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .multicolor-bar .bars div.bar:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .multicolor-bar .legends {
    text-align: center;
  }

  .multicolor-bar .legends .legend {
    display: inline-block;
    margin: 0 5px;
    text-align: center;
  }

  .multicolor-bar .legends .legend .dot {
    font-size: 25px;
    vertical-align: middle;
  }

  .multicolor-bar .legends .legend .label {
    margin-left: 2px;
    vertical-align: middle;
  }
`;
