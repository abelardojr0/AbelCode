import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";

export const Root = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: "Fira Code", monospace;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  ${responsive(breakpoints.tablet)} {
    flex-direction: column;
    position: static;
    min-width: 0;
    min-height: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundContent};
  min-width: 0;
  min-height: 0;
  ${responsive(breakpoints.tablet)} {
    min-width: 0;
    min-height: 0;
    width: 100vw;
    height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  background: ${({ theme }) => theme.backgroundSidebarTitle};
  border-bottom: none;
  height: 60px;
  padding: 0 8px 0 0;
  overflow-x: auto;
  position: relative;
  min-width: 220px;
  ${responsive(breakpoints.tablet)} {
    min-width: 0;
    height: 48px;
  }
`;
