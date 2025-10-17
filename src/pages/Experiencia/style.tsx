import styled from "styled-components";
// use theme from ThemeProvider

export const TimelineContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 32px 0 32px 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.explorerLine || "#363b40"};
  z-index: 0;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
  position: relative;
`;

export const TimelineDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundTab || "#7c5dfa"};
  border: 3px solid ${({ theme }) => theme.borderSidebar || "#23242b"};
  margin-right: 32px;
  margin-left: 24px;
  z-index: 1;
  box-shadow: 0 0 0 2px #363b40;
`;

export const TimelineContent = styled.div`
  background: ${({ theme }) => theme.backgroundContent || "#23242b"};
  border-radius: 8px;
  padding: 18px 24px;
  box-shadow: 0 2px 12px 0 #0000000a;
  min-width: 0;
  flex: 1;
`;

export const TimelinePeriod = styled.div`
  color: ${({ theme }) => theme.textSecondary || "#7c7c8a"};
  font-size: 13px;
  font-family: "Fira Code", monospace;
  margin-bottom: 2px;
`;

export const TimelineTitle = styled.div`
  color: ${({ theme }) => theme.text || "#f8f8f2"};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2px;
`;

export const TimelineCompany = styled.div`
  color: ${({ theme }) => theme.accentPurple || "#7c5dfa"};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const TimelineDescription = styled.div`
  color: ${({ theme }) => theme.textSecondary || "#bcbcbc"};
  font-size: 15px;
  line-height: 1.6;
`;
