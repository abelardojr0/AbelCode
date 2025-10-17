export type Breakpoint = string;

export default function responsive(breakpoint: Breakpoint): string {
  return `@media (max-width: ${breakpoint})`;
}

export interface Breakpoints {
  mobile: Breakpoint;
  tablet: Breakpoint;
  desktop: Breakpoint;
}

export const breakpoints: Breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1080px",
};
