import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  padding: 12px 0;
  align-items: center;
  ${responsive(breakpoints.tablet)} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 8px 0;
  }
`;

export const ProjectCard = styled.div<{ gradient?: string }>`
  position: relative;
  background: ${({ gradient, theme }) => gradient || theme.backgroundContent};
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 #000a;
  border: 1px solid ${({ theme }) => theme.borderSidebar};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 180px;
  transition: box-shadow 0.2s, transform 1s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s, width 1s cubic-bezier(0.22, 1, 0.36, 1),
    height 1s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
  z-index: 0;
  &.active {
    z-index: 20;
    box-shadow: 0 8px 40px 0 ${({ theme }) => `${theme.accentCyan}55`},
      0 2px 24px 0 #000c;
  }
  &::before,
  &::after {
    display: none !important;
  }
  > * {
    position: relative;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
  }
  ${responsive(breakpoints.tablet)} {
    min-height: 220px;
  }
  ${responsive(breakpoints.mobile)} {
    min-height: 140px;
    border-radius: 12px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  min-width: 200px;
  height: 160px;
  object-fit: cover;
  background: ${({ theme }) => theme.backgroundContent};
  border-bottom: 1px solid ${({ theme }) => theme.borderSidebar};
  ${responsive(breakpoints.mobile)} {
    min-width: 120px;
    height: 100px;
  }
`;

export const ProjectContent = styled.div<{ gradient?: string }>`
  padding: 12px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({ gradient }) => gradient || "none"};
  border-radius: 0 0 12px 12px;
  transition: background 0.3s;
`;

export const ProjectTitle = styled.h3`
  color: #f8f8f2;
  font-size: 1.15rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  color: #bcbcbc !important;
  font-size: 0.93rem;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProjectExtra = styled.div`
  margin-top: 16px;
  color: #bcbcbc;
  font-size: 1.01rem;
  background: ${({ theme }) => theme.backgroundContent};
  border-radius: 8px;
  padding: 14px 12px 10px 12px;
  box-shadow: 0 2px 12px 0 #0005;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export const ProjectMinimal = styled.div<{ gradient?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  transition: background 0.3s;
  ${responsive(breakpoints.mobile)} {
    height: 80px;
  }
`;

export const ProjectLogo = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 8px;
  background: none;
`;

export const ProjectMinimalTitle = styled.h3`
  color: #f8f8f2;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 6px #0005;
`;

export const ProjectActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 6px;
`;

export const ProjectButton = styled.a`
  display: inline-block;
  padding: 7px 13px;
  background: transparent;
  border: 2px solid #f8f8f2;
  color: #f8f8f2;
  font-weight: 700;
  border-radius: 7px;
  font-size: 0.93rem;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 #0002;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;
