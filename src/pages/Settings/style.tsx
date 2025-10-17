import styled from "styled-components";

export const ReadmeWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  color: ${({ theme }) => theme.textSecondary};
  flex-wrap: wrap;
  @media (max-width: 920px) {
    gap: 20px;
  }
`;

export const JsonBlock = styled.pre`
  background: ${({ theme }) => theme.backgroundSidebar};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
    "Segoe UI Mono", "Helvetica Neue", monospace;
  font-size: 13px;
  line-height: 1.5;
  max-width: 360px;
  flex: 0 0 360px;
  min-height: 560px;
  @media (max-width: 920px) {
    flex: 1 1 100%;
    max-width: 100%;
    min-height: 420px;
  }
  position: relative;
  transition: box-shadow 0.12s, transform 0.12s;
  /* prevent leaking text: allow scrolling and wrap long words when needed */
  overflow: auto;
  white-space: pre-wrap; /* preserve newlines but allow wrapping */
  word-break: break-word; /* break long words/URLs if needed */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.42);
  }
`;

export const DocContent = styled.div`
  max-width: 760px;
  flex: 1 1 460px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 16px;
  line-height: 1.8;
  padding-right: 12px;

  code {
    background: rgba(255, 255, 255, 0.03);
    padding: 2px 6px;
    border-radius: 6px;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    color: ${({ theme }) => theme.text};
    margin: 0 0 8px 0;
    font-size: 28px;
  }

  h3 {
    color: ${({ theme }) => theme.text};
    margin-top: 18px;
    margin-bottom: 8px;
    font-size: 18px;
  }

  ul {
    margin: 0 0 12px 18px;
  }
`;

export const MetaKey = styled.span`
  color: ${({ theme }) => theme.accentCyan};
`;
export const CopyButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.borderSidebar};
  color: ${({ theme }) => theme.text};
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  &:hover {
    background: ${({ theme }) => theme.accentCyan};
    color: ${({ theme }) => theme.background};
  }
  &[data-state="copied"] {
    background: ${({ theme }) => theme.accentGreen};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.accentGreen};
  }
`;

export const TocContainer = styled.nav`
  min-width: 180px;
  margin-left: 8px;
  /* make the TOC a horizontal fixed overlay centered below the header/title */
  position: fixed;
  left: 55%;
  transform: translateX(-50%);
  top: 100px; /* sits below the page title; adjust if header size changes */
  height: fit-content;
  z-index: 120;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundSidebar};
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.borderSidebar};
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
  gap: 8px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 920px) {
    display: none; /* mobile uses TocMobileToggle */
  }
`;

export const SideArea = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex: 0 0 380px;
  @media (max-width: 920px) {
    flex: 1 1 100%;
    align-items: stretch;
  }
`;

export const TocMobileToggle = styled.button`
  display: none;
  @media (max-width: 1200px) {
    display: inline-block;
    position: fixed;
    right: 18px;
    top: 88px;
    z-index: 90;
    background: ${({ theme }) => theme.backgroundSidebar};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.borderSidebar};
    padding: 8px 10px;
    border-radius: 10px;
  }
`;

export const BadgesRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

export const GithubButton = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 0px 10px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
  }
`;

export const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TocItem = styled.li`
  a {
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    padding: 6px 8px;
    border-radius: 6px;
  }
  &.active a {
    background: ${({ theme }) => theme.backgroundSidebar};
    color: ${({ theme }) => theme.text};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
`;
export const SettingsPanel = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 480px;
`;

export const Section = styled.section`
  background: ${({ theme }) => theme.backgroundContent};
  border-radius: 12px;
  padding: 20px 18px 14px 18px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const OptionLabel = styled.label`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
`;

export const OptionInput = styled.input`
  accent-color: ${({ theme }) => theme.accent};
  &[type="range"] {
    width: 120px;
  }
  &[as="select"] {
    min-width: 100px;
  }
`;
