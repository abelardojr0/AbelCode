import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Root, Main, Header } from "../VSCodeLayout/style";
import Sidebar from "../Sidebar";
import VSCodeTab from "../VSCodeTab";
import Content from "../Content";
import IndexPage from "../../pages/IndexPage";
import type { FileTab } from "../../utils/types";

interface VSCodeLayoutProps {
  explorerTree: any[];
  allFiles: FileTab[];
}

const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ explorerTree }) => {
  const [openTabs, setOpenTabs] = React.useState<FileTab[]>([]);
  const [activeTab, setActiveTab] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    setOpenTabs([
      {
        path: "/",
        icon: (
          <img
            src="https://images.icon-icons.com/171/PNG/512/html5_23329.png"
            alt="HTML"
            style={{ width: 16, height: 16, display: "block" }}
          />
        ),
        label: "index.html",
        file: "index.html",
      },
    ]);
    setActiveTab("/");
    navigate("/");
  }, []);

  const openFile = (file: FileTab) => {
    setOpenTabs((tabs) => {
      if (tabs.find((t) => t.path === file.path)) return tabs;
      return [...tabs, file];
    });
    setActiveTab(file.path);
    navigate(file.path);
  };

  const closeTab = (file: FileTab) => {
    setOpenTabs((tabs) => {
      const idx = tabs.findIndex((t) => t.path === file.path);
      const newTabs = tabs.filter((t) => t.path !== file.path);
      if (activeTab === file.path) {
        if (newTabs.length > 0) {
          const newIdx = idx > 0 ? idx - 1 : 0;
          setActiveTab(newTabs[newIdx].path);
          navigate(newTabs[newIdx].path);
        } else {
          setActiveTab("");
          navigate("/");
        }
      }
      return newTabs;
    });
  };

  return (
    <Root>
      <Sidebar
        explorerTree={explorerTree}
        onFileClick={openFile}
        activeFilePath={activeTab}
      />
      <Main>
        <Header>
          {openTabs.map((file) => (
            <VSCodeTab
              key={file.path}
              file={file}
              active={activeTab === file.path}
              onClick={() => {
                setActiveTab(file.path);
                navigate(file.path);
              }}
              onClose={() => closeTab(file)}
            />
          ))}
        </Header>
        <Content>
          {openTabs.find((t) => t.path === activeTab) ? (
            <Outlet context={{ activeTab }} />
          ) : (
            <IndexPage />
          )}
        </Content>
      </Main>
    </Root>
  );
};

export default VSCodeLayout;
