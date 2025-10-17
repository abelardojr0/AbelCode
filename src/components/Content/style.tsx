import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";

export const ContentSection = styled.section`
  flex: 1;
  padding: 0;
  background: ${({ theme }) => theme.backgroundContent};
  overflow-y: auto;
  transition: background 0.4s;
  box-shadow: none;
  border-radius: 0;
  position: relative;
  display: flex;
  ${responsive(breakpoints.mobile)} {
    padding: 0;
  }
`;

export const LineNumberColumn = styled.div`
  width: 38px;
  min-width: 48px;
  min-height: 100%;
  color: #44475a;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  padding-top: 32px;
  padding-bottom: 24px;
  user-select: none;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.7;
  align-self: stretch;
  z-index: 1;
`;

export const ContentBody = styled.div`
  flex: 1;
  padding: 32px 24px 24px 24px;
  min-width: 0;
  margin-left: 38px;
  ${responsive(breakpoints.mobile)} {
    padding: 12px 4vw 12px 4vw;
    margin-left: 38px;
  }
`;
