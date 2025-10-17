import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import VSCodeLayout from "./components/VSCodeLayout";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import IndexPage from "./pages/IndexPage";
import Habilidades from "./pages/Habilidades";
import Experiencias from "./pages/Experiencia";
import Readme from "./pages/Settings";
import Theme from "./pages/Theme";
import type { FileTab } from "./utils/types";
import { IconFile, IconMarkdown } from "@tabler/icons-react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, draculaTheme } from "./utils/theme";
import React, { useState } from "react";

// Simple ThemeContext to expose toggle to pages
export const AppThemeContext = React.createContext({
  themeName: "dark",
  toggleTheme: (_name?: string) => {},
  setCustomColors: (_primary?: string, _background?: string) => {},
});
const explorerTree = [
  {
    name: "portfolio",
    children: [
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
      {
        name: "Pages",
        children: [
          {
            path: "/sobre",
            icon: (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png"
                alt="JavaScript"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Sobre",
            file: "sobre.js",
          },
          {
            path: "/projetos",
            icon: (
              <img
                src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
                alt="Python"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Projetos",
            file: "projetos.py",
          },
          {
            path: "/habilidades",
            icon: (
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="React"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Habilidades",
            file: "habilidades.tsx",
          },
          {
            path: "/experiencias",
            icon: (
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png"
                alt="Experiências"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Experiências",
            file: "experiencias.js",
          },
          {
            path: "/contato",
            icon: (
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-icon-svg-download-png-2945272.png?f=webp"
                alt="TypeScript"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Contato",
            file: "contato.ts",
          },
        ],
      },
      {
        name: "Config",
        children: [
          {
            path: "/readme",
            icon: <IconMarkdown size={16} color="#b388ff" />,
            file: "README.md",
            isConfig: true,
            label: "README.md",
          },
          {
            path: "/theme",
            icon: <IconFile size={16} color="#b388ff" />,
            file: "theme.json",
            isConfig: true,
            label: "Theme",
          },
        ],
      },
    ],
  },
];
const allFiles: FileTab[] = [];
explorerTree.forEach((folder) => {
  folder.children?.forEach((sub) => {
    sub.children?.forEach((file: any) => {
      if (file.path) allFiles.push(file);
    });
  });
});

const RootApp: React.FC = () => {
  const [themeName, setThemeName] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("app-theme");
      return saved || "dark";
    } catch (e) {
      return "dark";
    }
  });
  const toggleTheme = (name?: string) => {
    setThemeName((prev) => {
      const next = name || (prev === "dark" ? "light" : "dark");
      try {
        localStorage.setItem("app-theme", next);
      } catch (e) {}

      // if a specific theme name was provided, reset overrides
      if (name) {
        setOverrides({});
        try {
          localStorage.removeItem("app-theme-overrides");
        } catch (e) {}
      }

      return next;
    });
  };

  // persisted theme overrides (simple custom colors)
  const [overrides, setOverrides] = React.useState<{
    accent?: string;
    backgroundContent?: string;
    text?: string;
  }>(() => {
    try {
      const raw = localStorage.getItem("app-theme-overrides");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

  const setCustomColors = (primary?: string, background?: string) => {
    setOverrides((prev) => {
      const next = {
        ...prev,
        ...(primary ? { accent: primary, text: primary } : {}),
        ...(background ? { backgroundContent: background } : {}),
      };
      try {
        localStorage.setItem("app-theme-overrides", JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const baseTheme =
    themeName === "light"
      ? lightTheme
      : themeName === "dracula"
      ? draculaTheme
      : darkTheme;

  const selectedTheme = {
    ...baseTheme,
    ...overrides,
  };

  return (
    <StrictMode>
      <AppThemeContext.Provider
        value={{ themeName, toggleTheme, setCustomColors }}
      >
        <ThemeProvider theme={selectedTheme}>
          <BrowserRouter>
            <GlobalStyles />
            <Routes>
              <Route
                path="/"
                element={
                  <VSCodeLayout
                    explorerTree={explorerTree}
                    allFiles={allFiles}
                  />
                }
              >
                <Route index element={<IndexPage />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="projetos" element={<Projetos />} />
                <Route path="contato" element={<Contato />} />
                <Route path="habilidades" element={<Habilidades />} />
                <Route path="experiencias" element={<Experiencias />} />
                <Route path="readme" element={<Readme />} />
                <Route path="theme" element={<Theme />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppThemeContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<RootApp />);
