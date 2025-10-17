import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";

export const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.backgroundSidebar};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  gap: 0;
  z-index: 2;
  position: relative;
  height: 100vh;
  ${responsive(breakpoints.tablet)} {
    width: 100vw;
    min-width: 0;
    flex-direction: row;
    box-shadow: none;
    position: static;
    height: 56px;
    align-items: center;
    padding: 0 8px;
  }
`;

export const Logo = styled.div`
  padding: 0 16px;
  letter-spacing: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.borderSidebar};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-height: 40px;
  }
`;

export const Explorer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
  background: ${({ theme }) => theme.backgroundSidebar};
`;

export const ExplorerTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundSidebarTitle};
  font-weight: 600;
  padding: 6px 6px 6px 16px;
  letter-spacing: 0.5px;
  user-select: none;
  text-align: left;
`;
