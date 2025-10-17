import styled from "styled-components";
import responsive, { breakpoints } from "../../utils/responsive";

export const SocialPanelContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 24px;
  width: 220px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0;
  z-index: 3;
  padding-left: 12px;
  ${responsive(breakpoints.tablet)} {
    position: static;
    width: auto;
    padding-left: 0;
    align-items: center;
    margin-left: auto;
    bottom: unset;
  }
`;

export const SocialLink = styled.a`
  color: #7a7a7a;
  font-size: 1.5em;
  transition: color 0.2s, transform 0.2s;
  margin-right: 18px;
  &:hover {
    color: #3c99d4;
    transform: scale(1.2) rotate(8deg);
    text-shadow: 0 2px 8px #3c99d455;
  }
  ${responsive(breakpoints.mobile)} {
    font-size: 20px;
  }
`;
