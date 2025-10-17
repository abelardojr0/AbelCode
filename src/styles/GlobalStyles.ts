import styled, { createGlobalStyle } from "styled-components";
import responsive, { breakpoints } from "../utils/responsive";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Fira Code', monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: auto;
  }
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text};
  ${responsive(breakpoints.mobile)} {
    text-align: center;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70vw;
  animation: fadeIn 0.7s;
  position: relative;
  padding-bottom: 20px;
  p {
    margin-top: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.textSecondary};
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;
