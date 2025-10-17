import VSCodeLayout from "./components/VSCodeLayout";
import "./App.css";
import type { FileTab } from "./utils/types";

import {
  IconBrandTypescript,
  IconBrandPython,
  IconSettings,
  IconFile,
} from "@tabler/icons-react";

const explorerTree = [
  {
    name: "portfolio",
    children: [
      {
        name: "src",
        children: [
          {
            path: "/",
            icon: (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png"
                alt="JavaScript"
                style={{ width: 16, height: 16, display: "block" }}
              />
            ),
            label: "Home",
            file: "home.js",
          },
          {
            path: "/projetos",
            icon: <IconBrandPython size={16} color="#3776ab" />,
            label: "Projetos",
            file: "portfolio.py",
          },
          {
            path: "/contato",
            icon: <IconBrandTypescript size={16} color="#3178c6" />,
            label: "Contato",
            file: "contato.ts",
          },
        ],
      },
      {
        name: "config",
        children: [
          {
            icon: <IconSettings size={16} color="#b388ff" />,
            file: "settings.json",
            isConfig: true,
          },
          {
            icon: <IconFile size={16} color="#b388ff" />,
            file: "theme.json",
            isConfig: true,
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

function App() {
  return <VSCodeLayout explorerTree={explorerTree} allFiles={allFiles} />;
}

export default App;
