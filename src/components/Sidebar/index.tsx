import React, { useState, useRef, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  Sidebar as SidebarStyled,
  Logo,
  Explorer,
  ExplorerTitle,
} from "./style";
import VSCodeExplorerTree from "../VSCodeExplorerTree/index";
import { SocialPanelContainer, SocialLink } from "../SocialPanel/style";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import LogoImage from "../../assets/logo.png";

interface SidebarProps {
  explorerTree: any[];
  onFileClick: (file: any) => void;
  activeFilePath?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  explorerTree,
  onFileClick,
  activeFilePath,
}) => {
  const [rootOpen, setRootOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      if (!isMobile) return;
      const sidebar = sidebarRef.current;
      const target = event.target as HTMLElement;
      if (
        sidebar &&
        !sidebar.contains(target) &&
        !target.closest(".sidebar-hamburger")
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleFileClick = (file: any) => {
    setIsOpen(false);
    onFileClick(file);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        style={{
          position: "fixed",
          top: 60,
          left: 40,
          zIndex: 100,
          background: "#23242b",
          border: "none",
          borderRadius: 8,
          padding: 8,
          display: "none",
        }}
        className="sidebar-hamburger"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <IconX size={28} color="#fff" />
        ) : (
          <IconMenu2 size={28} color="#fff" />
        )}
      </button>
      <SidebarStyled data-open={isOpen} ref={sidebarRef}>
        <Logo>
          <img src={LogoImage} alt="" />
        </Logo>
        <Explorer>
          <ExplorerTitle
            onClick={() => setRootOpen((v) => !v)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {rootOpen ? (
              <IconChevronDown size={16} style={{ marginRight: 2 }} />
            ) : (
              <IconChevronRight size={16} style={{ marginRight: 2 }} />
            )}
            <span style={{ fontWeight: 600, letterSpacing: 0.5 }}>
              Portfólio
            </span>
          </ExplorerTitle>
          {rootOpen && (
            <VSCodeExplorerTree
              explorerTree={explorerTree}
              onFileClick={handleFileClick}
              activeFilePath={activeFilePath}
            />
          )}
        </Explorer>
        <SocialPanelContainer
          style={{
            position: "static",
            paddingLeft: 0,
            marginTop: 18,
            marginBottom: 0,
            justifyContent: "center",
          }}
        >
          <SocialLink
            href="https://github.com/abelardojr0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={32} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/abelardo-junior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={32} />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/abel.jr_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={32} />
          </SocialLink>
        </SocialPanelContainer>
      </SidebarStyled>
      <style>{`
        @media (max-width: 900px) {
          .sidebar-hamburger {
            display: block !important;
          }
          aside[data-open="false"] {
            transform: translateX(-110%);
            transition: transform 0.3s;
          }
          aside[data-open="true"] {
            transform: translateX(0);
            transition: transform 0.3s;
          }
          aside {
            position: fixed !important;
            left: 0;
            top: 50px;
            height: 100vh !important;
            width: 70vw !important;
            max-width: 320px !important;
            min-width: 220px !important;
            z-index: 99;
            box-shadow: 0 0 0 100vw #0007;
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
