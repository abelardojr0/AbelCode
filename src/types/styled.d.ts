import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    backgroundSidebar: string;
    backgroundSidebarTitle: string;
    backgroundTabActive: string;
    backgroundTab: string;
    borderSidebar: string;
    borderTab: string;
    backgroundContent: string;
    borderTabHover: string;
    borderTabTopActive: string;
    explorerLine: string;
    explorerFolder: string;
    explorerFolderOpen: string;
    explorerFile: string;
    explorerFileActive: string;
    explorerFileHover: string;
    explorerFileBgActive: string;
    explorerFileBgHover: string;
    explorerConfig: string;
    explorerConfigBg: string;
    text: string;
    textSecondary: string;
    accent: string;
    accentBlue: string;
    accentGreen: string;
    accentPurple: string;
    accentCyan: string;
  }
}
