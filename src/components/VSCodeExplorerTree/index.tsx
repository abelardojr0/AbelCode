import React from "react";
import { ExplorerTree } from "./style";
import {
  IconFolder,
  IconFolderOpen,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";

interface VSCodeExplorerTreeProps {
  explorerTree: any[];
  onFileClick: (file: any) => void;
  activeFilePath?: string;
}

function getAllFolderNames(tree: any[]): Record<string, boolean> {
  const open: Record<string, boolean> = {};
  function walk(nodes: any[]) {
    nodes.forEach((node) => {
      if (node.name) open[node.name] = true;
      if (node.children) walk(node.children);
    });
  }
  walk(tree);
  return open;
}

const VSCodeExplorerTree: React.FC<VSCodeExplorerTreeProps> = ({
  explorerTree,
  onFileClick,
  activeFilePath,
}) => {
  const [open, setOpen] = React.useState<Record<string, boolean>>(() =>
    getAllFolderNames(explorerTree)
  );
  React.useEffect(() => {
    setOpen(getAllFolderNames(explorerTree));
  }, [explorerTree]);
  return (
    <ExplorerTree>
      {explorerTree.map((folder) => (
        <div key={folder.name}>
          {folder.children &&
            folder.children.map((sub: any) => {
              if (sub.path) {
                return (
                  <div
                    key={sub.path}
                    className={`vsc-explorer-file${
                      activeFilePath === sub.path ? " active" : ""
                    }`}
                    onClick={() => onFileClick(sub)}
                  >
                    <span className="vsc-explorer-icon">{sub.icon}</span>
                    <span className="vsc-explorer-filename">
                      {sub.label || sub.file}
                    </span>
                  </div>
                );
              }
              if (sub.children) {
                return (
                  <div key={sub.name}>
                    <div
                      className={`vsc-explorer-folder vsc-explorer-folder-sub`}
                      style={{
                        paddingLeft: 28,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setOpen((o) => ({ ...o, [sub.name]: !o[sub.name] }))
                      }
                    >
                      <span
                        className="vsc-explorer-chevron"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {open[sub.name] ? (
                          <IconChevronDown size={16} color="#7a7a7a" />
                        ) : (
                          <IconChevronRight size={16} color="#7a7a7a" />
                        )}
                      </span>
                      <span
                        style={{
                          margin: "0 4px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {open[sub.name] ? (
                          <IconFolderOpen size={16} color="#6272a4" />
                        ) : (
                          <IconFolder size={16} color="#6272a4" />
                        )}
                      </span>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        {sub.name}
                      </span>
                    </div>
                    {open[sub.name] && (
                      <div className="vsc-explorer-tree-children vsc-explorer-tree-children-sub">
                        {sub.children.map((file: any) =>
                          file.path ? (
                            <div
                              key={file.path}
                              className={`vsc-explorer-file${
                                activeFilePath === file.path ? " active" : ""
                              }`}
                              onClick={() => onFileClick(file)}
                            >
                              <span className="vsc-explorer-icon">
                                {file.icon}
                              </span>
                              <span className="vsc-explorer-filename">
                                {file.file}
                              </span>
                            </div>
                          ) : (
                            <div
                              className="vsc-explorer-file vsc-explorer-file-config"
                              key={file.file}
                            >
                              <span className="vsc-explorer-icon">
                                {file.icon}
                              </span>
                              <span className="vsc-explorer-filename">
                                {file.file}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
        </div>
      ))}
    </ExplorerTree>
  );
};

export default VSCodeExplorerTree;
