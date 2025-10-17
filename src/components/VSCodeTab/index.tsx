import React, { useState } from "react";
import { TabButton, CloseButton } from "./style";
import type { FileTab } from "../../utils/types";

interface VSCodeTabProps {
  file: FileTab;
  active: boolean;
  onClick: () => void;
  onClose: () => void;
}

const VSCodeTab: React.FC<VSCodeTabProps> = ({
  file,
  active,
  onClick,
  onClose,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <TabButton
      active={active}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {file.icon}
      <span>{file.file}</span>
      <CloseButton
        className="close-btn"
        $active={active}
        style={{ visibility: active || hover ? "visible" : "hidden" }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onClose();
        }}
        tabIndex={-1}
        aria-label="Fechar aba"
      >
        ×
      </CloseButton>
    </TabButton>
  );
};

export default VSCodeTab;
