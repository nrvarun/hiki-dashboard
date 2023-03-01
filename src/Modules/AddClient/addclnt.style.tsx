import { Button, IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledAddClientWrapper = styled.section`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 6px 32px rgba(0, 82, 204, 0.05);
  border-radius: 8px;
`;

export const StyledAddClientHeader = styled.div`
  padding: 32px;
  border-bottom: 1px solid rgba(0, 82, 204, 0.4);
`;

export const StyledAddClientBody = styled.div`
  padding: 32px 0 0 0;
`;

export const StyledFormBodyWrapper = styled.div`
  max-width: 86%;
  margin: 0 auto;
  padding: 0 56px 56px;
`;

export const StyledAddClientFooter = styled.div`
  padding: 32px 56px;
  border-top: 1px solid rgba(0, 82, 204, 0.4);
`;

export const StyledFieldTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #1c1c1c;
  margin: 0 0 12px 0;

  span {
    color: #eb4747;
  }
`;

export const StyledRadioLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0 0 0 8px;
  }
`;

export const StyledProfilePicWrapper = styled.div`
  position: relative;
  display: flex;
  background: #ffffff;
  border: 1px dashed rgba(136, 136, 136, 0.4);
  border-radius: 6px;
  padding: 42px 26px;
  margin: 0 0 8px 0;
`;

export const StyledProfilePic = styled.div`
  position: relative;
  margin: auto;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledBankClientInfo = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1c1c;
  margin: 0 0 24px 0;

  p {
    margin: 0 0 0 8px;
  }
`;

export const StyledBankInfo = styled.div`
  background: rgba(255, 139, 55, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: 0 0 0 8px;
    color: #ff8b37;
  }
`;

export const StyledDocsListing = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  max-width: 700px;

  li {
    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledDocsListingItem = styled.li`
  padding: 0;
  margin: 0 0 48px 0;
`;

export const StyledDocsEntry = styled.div`
  padding: 45px 100px;
  width: 100%;
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(136, 136, 136, 0.2);
`;

export const StyledDocsEntryContent = styled.div`
  position: relative;
`;

export const StyledDocsEntryFileDetailsWrapper = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #888888;
  }
`;

export const StyledDocsEntryFileDetail = styled.div`
  padding: 12px 16px;
  background: #f2f9ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 8px 0 0;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #0052cc;
    margin: 0;
  }
`;

export const StyledFileSelectInputOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid #0052cc !important;
  border-radius: 8px;
  padding: 12px;
  pointer-events: none;

  p {
    text-align: center;
    width: 100%;
  }
`;

export const StyledFileSelectWrapper = styled.div`
  position: relative;

  * {
    border: 0;
  }

  input {
    opacity: 0;
    cursor: pointer;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0052cc;
    margin: 0;

    svg {
      margin: 0 8px 0 0;
    }
  }

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -26px;
    left: 0;
  }
`;

export const StyledDocDeleteBtn = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
