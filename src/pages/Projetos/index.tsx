import React, { useState, useEffect } from "react";
import {
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectMinimal,
  ProjectLogo,
  ProjectMinimalTitle,
  ProjectActions,
  ProjectButton,
} from "./style";
import styled from "styled-components";
import { projects } from "./projects";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";

const ProjectCardWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
  @media (max-width: 1080px) {
    height: 320px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 8px 0;
    align-items: stretch;
  }
`;

const Projetos: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: 920px)`).matches;
  });
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: 920px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange as any);
    else mq.addListener(onChange as any);
    setIsMobile(mq.matches);
    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

  const [hovered, setHovered] = useState<number | null>(null);
  const [tilts, setTilts] = useState<{
    [idx: number]: { x: number; y: number };
  }>({});
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  function handleMouseMove(e: React.MouseEvent, idx: number) {
    if (expandedCard !== idx) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 a 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 a 1
    setTilts((t) => {
      const prev = t[idx] || { x: 0, y: 0 };
      if (Math.abs(prev.x - x) < 0.01 && Math.abs(prev.y - y) < 0.01) return t;
      return { ...t, [idx]: { x, y } };
    });
    setHovered(idx);
  }

  function handleExpand(idx: number) {
    setExpandedCard(idx);
    setHovered(idx);
  }

  function handleMouseLeave(idx: number) {
    setHovered(null);
    setTilts((t) => ({ ...t, [idx]: { x: 0, y: 0 } }));
    setExpandedCard((prev) => (prev === idx ? null : prev));
  }

  return (
    <ContainerPage>
      <SubTitle>Meus Projetos</SubTitle>
      <p>
        Esta lista de projetos não inclui os trabalhos que realizo atualmente
        como Desenvolvedor Front-End, devido às políticas de privacidade da
        empresa. Por isso, ela é composta por projetos desenvolvidos para fins
        de estudo ou realizados como freelancer.
      </p>
      <ProjectsGrid>
        {projects.map((project, idx) => {
          const isActive = isMobile || hovered === idx;
          const tilt = isMobile ? { x: 0, y: 0 } : tilts[idx] || { x: 0, y: 0 };
          return (
            <ProjectCardWrapper key={idx}>
              <ProjectCard
                className={isActive ? "active" : ""}
                gradient={project.gradient}
                onMouseMove={(e) => !isMobile && handleMouseMove(e, idx)}
                onMouseLeave={() => !isMobile && handleMouseLeave(idx)}
                onMouseEnter={() => !isMobile && handleExpand(idx)}
                tabIndex={0}
                onFocus={() => setHovered(idx)}
                onBlur={() => !isMobile && handleMouseLeave(idx)}
                style={
                  isActive
                    ? isMobile
                      ? {
                          position: "static",
                          width: "100%",
                          height: "100%",
                          zIndex: 1,
                          border: "none",
                          boxShadow: "0 2px 12px 0 #000a",
                          borderRadius: "12px",
                          transform: `perspective(1200px) rotateX(${
                            tilt.y * 20
                          }deg) rotateY(${-tilt.x * 20}deg)`,
                          transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                        }
                      : {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: 30,
                          border: "2px solid #fff",
                          boxShadow: "0 8px 40px 0 #000a, 0 2px 24px 0 #000c",
                          borderRadius: "16px",
                          transform: `perspective(1200px) rotateX(${
                            tilt.y * 20
                          }deg) rotateY(${-tilt.x * 20}deg)`,
                          transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                        }
                    : {
                        position: "static",
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        border: "none",
                        boxShadow: "0 2px 12px 0 #000a",
                        borderRadius: "12px",
                        transform: `perspective(1200px) rotateX(${
                          tilt.y * 20
                        }deg) rotateY(${-tilt.x * 20}deg)`,
                        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                      }
                }
              >
                {!isActive ? (
                  <ProjectMinimal gradient={project.gradient}>
                    <ProjectLogo src={project.logo} alt={project.title} />
                    <ProjectMinimalTitle>{project.title}</ProjectMinimalTitle>
                  </ProjectMinimal>
                ) : (
                  <>
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectContent>
                      <ProjectTitle
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <img
                          src={project.logo}
                          alt={project.title}
                          style={{
                            width: 28,
                            height: 28,
                            objectFit: "contain",
                            marginRight: 8,
                            borderRadius: 6,
                            boxShadow: "0 1px 4px #0002",
                          }}
                        />
                        {project.title}
                      </ProjectTitle>
                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>
                      <ProjectActions>
                        <ProjectButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </ProjectButton>
                        <ProjectButton
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visitar site
                        </ProjectButton>
                      </ProjectActions>
                    </ProjectContent>
                  </>
                )}
              </ProjectCard>
            </ProjectCardWrapper>
          );
        })}
      </ProjectsGrid>
    </ContainerPage>
  );
};

export default Projetos;
