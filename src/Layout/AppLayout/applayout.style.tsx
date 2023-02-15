import styled from "styled-components";

export const StyledAppLayoutWrapper = styled.section`
  background-color: rgb(233 240 246);
  min-height: 100vh;
`;

export const StyledAppDrawer = styled.aside`
  padding: 24px 32px;
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 1200;
  box-shadow: 0px 0px 15px rgba(0, 82, 204, 0.1);
`;

export const StyledAppDrawerHeader = styled.header`
  position: relative;
  margin: 0 0 48px 0;
`;

export const StyledAppDrawerBody = styled.section`
  position: relative;
`;

export const StyledAppNavList = styled.ul`
  position: relative;
  padding: 0;
  list-style: none;
`;

export const StyledAppNavItem = styled.nav`
  padding: 8px 14px;
  display: flex;
  align-items: center;

  svg {
    margin: 0 12px 0 0;
    height: 16px;
    width: auto;

    path {
      stroke: currentColor;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #888888;
    margin: 0;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    background: #eb4747;
    border-radius: 10px;
    padding: 0px 4px;
    color: #ffffff;
  }
`;

export const StyledAppNavItemBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledAppBody = styled.div`
  width: calc(100% - 240px);
  margin: 0 0 0 auto;
  padding: 120px 0 0 36px;
`;