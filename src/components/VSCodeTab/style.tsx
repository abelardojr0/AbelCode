import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";
// use theme from ThemeProvider via props

export const TabList = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundTab};
  border-bottom: 1px solid ${({ theme }) => theme.borderTab};
  height: 38px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ${responsive(breakpoints.mobile)} {
    height: 32px;
    padding-left: 48px;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({ active, theme }) =>
    active ? theme.backgroundContent : theme.backgroundTab};
  color: ${({ active, theme }) => (active ? theme.text : "#6272a4")};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.borderTab};
  padding: 0 16px;
  height: 100%;
  font-family: "Fira Code", monospace;
  font-size: 15px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  position: relative;
  outline: none;
  border-radius: 0 !important;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  z-index: ${({ active }) => (active ? 2 : 1)};
  box-shadow: none;
  border-top: ${({ active, theme }) =>
    active ? `2px solid ${theme.borderTabTopActive}` : "none"};
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover {
    border-right: 1px solid ${({ theme }) => theme.borderTab};
    color: ${({ active, theme }) => (active ? theme.text : "#6272a4")};
    border-top: ${({ active, theme }) =>
      !active
        ? `2px solid ${theme.accentBlue}`
        : `2px solid ${theme.borderTabTopActive}`};
  }
  ${responsive(breakpoints.mobile)} {
    padding: 0 8px;
    font-size: 13px;
  }
`;

export const CloseButton = styled.button<{ $active?: boolean }>`
  background: transparent;
  border: none;
  color: #a9a9b3;
  margin-left: 8px;
  font-size: 20px;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  transition: opacity 0.15s;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 3px;
  &:hover {
    color: ${({ theme }) => theme.text};
    opacity: 1;
    background: rgba(255, 255, 255, 0.07);
  }
`;
