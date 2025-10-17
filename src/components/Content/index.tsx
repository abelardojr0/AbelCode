import React, { useRef, useEffect, useState } from "react";
import {
  ContentSection as ContentContainer,
  LineNumberColumn,
  ContentBody,
} from "./style";

interface ContentProps {
  children: React.ReactNode;
}

const LINE_HEIGHT_PX = 24; // Aproximado ao CSS line-height

const Content: React.FC<ContentProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [numLines, setNumLines] = useState(1);

  useEffect(() => {
    function updateLines() {
      if (contentRef.current) {
        // Usa scrollHeight para pegar a altura total do conteúdo, incluindo o que está fora da tela
        const height = contentRef.current.scrollHeight;
        setNumLines(Math.max(1, Math.ceil(height / LINE_HEIGHT_PX)));
      }
    }
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, [children]);

  return (
    <ContentContainer>
      <LineNumberColumn>
        {Array.from({ length: numLines }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </LineNumberColumn>
      <ContentBody ref={contentRef}>{children}</ContentBody>
    </ContentContainer>
  );
};

export default Content;
