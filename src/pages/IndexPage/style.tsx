import styled from "styled-components";
// use theme from ThemeProvider

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-family: "Fira Code", monospace;
  font-size: 18px;
  opacity: 1;
  background: transparent;
  padding: 32px 8px 0 8px;
  box-sizing: border-box;
`;
