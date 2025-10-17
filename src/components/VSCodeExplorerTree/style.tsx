import styled from "styled-components";

export const ExplorerTree = styled.div`
  position: relative;
  width: 100%;
  .vsc-explorer-folder,
  .vsc-explorer-folder-sub,
  .vsc-explorer-tree-children-sub .vsc-explorer-file,
  .vsc-explorer-tree-children-sub .vsc-explorer-file-config {
    position: relative;
    padding-left: 20px !important;
  }
  .vsc-explorer-folder-sub::before,
  .vsc-explorer-tree-children-sub .vsc-explorer-file::before,
  .vsc-explorer-tree-children-sub .vsc-explorer-file-config::before {
    content: "";
    position: absolute;
    left: 14px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #363b40;
    opacity: 0.7;
    z-index: 0;
    pointer-events: none;
  }
  .vsc-explorer-folder-sub {
    position: relative;
  }
  .vsc-explorer-folder-sub::before {
    content: "";
    position: absolute;
    left: 14px;
  }
  .vsc-explorer-file.active::before,
  .vsc-explorer-folder.active::before,
  .vsc-explorer-folder-sub.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    border-radius: 0 2px 2px 0;
    background: #fff;
  }
  .vsc-explorer-file {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 0 3px 18px;
    border-radius: 0;
    color: #d4d4d4;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    margin-right: 0;
    position: relative;
    justify-content: flex-start;
    text-align: left;
    font-weight: 500;
  }
  .vsc-explorer-folder,
  .vsc-explorer-folder-sub {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 0 3px 18px;
    border-radius: 0;
    color: #d4d4d4;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    margin-right: 0;
    position: relative;
    justify-content: flex-start;
    text-align: left;
    font-weight: 500;
  }
  .vsc-explorer-tree-children-sub .vsc-explorer-file,
  .vsc-explorer-tree-children-sub .vsc-explorer-file-config {
    padding-left: 65px !important;
  }
  .vsc-explorer-file .vsc-explorer-icon {
    display: flex;
    align-items: center;
    min-width: 18px;
  }
  .vsc-explorer-file .vsc-explorer-filename {
    font-family: "Fira Code", monospace;
    font-size: 13px;
  }
  .vsc-explorer-file.active,
  .vsc-explorer-file:hover,
  .vsc-explorer-folder.active,
  .vsc-explorer-folder:hover,
  .vsc-explorer-folder-sub.active,
  .vsc-explorer-folder-sub:hover {
    background: #44475a;
    color: #f8f8f2;
    font-weight: 600;
    border-radius: 0;
    box-shadow: none;
    margin-right: 0;
    padding-right: 0 !important;
  }
`;
