import { LinearProgress } from "@mui/material";
import styled from "styled-components";

export const StyledDashCardSummary = styled.div`
  background: #f8fcff;
  border-radius: 8px;
  padding: 30px;
`;

export const StyledDashCardSummaryTitle = styled.h3<{
  size?: string;
}>`
  font-size: ${({ size }) => (size ? size : "28px")};
  line-height: 35px;
  margin: 0;
`;

export const StyledDashCardSummaryDetail = styled.p<{
  size?: string;
  weight?: string;
  color?: string;
}>`
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ size }) => (size ? size : "14px")};
  color: ${({ color }) => (color ? color : "#1C1C1C")};
  line-height: 22px;
  margin: 0 0 12px 0;
`;

export const StyledDashListHeading = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  margin: 0;
`;

export const StyledDashListDetail = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #888888;
  margin: 0;
`;

export const StyledDocumentItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;

  img {
    width: auto;
    height: 24px;
    margin: 0 16px 0 0;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #1c1c1c;
    margin: 0;
    max-width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const StyledProgressBar = styled(LinearProgress)<{
  fillcolor?: string;
  bgcolor: string;
}>`
  border-radius: 8px;
  height: 8px;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#0052CC")};

  .MuiLinearProgress-barColorPrimary {
    height: 8px;
    background-color: ${({ fillcolor }) => (fillcolor ? fillcolor : "#0052CC")};
  }
`;
