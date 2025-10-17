import React, { useRef, useEffect, useState } from "react";
import {
  IconBrandReact,
  IconBolt,
  IconBrush,
  IconWorld,
  IconDeviceMobile,
  IconNavigation,
  IconMoon,
  IconPalette,
  IconListDetails,
  IconWind,
  IconHome,
  IconBrain,
  IconFileCvFilled,
  IconBriefcase,
  IconUser,
  IconAddressBook,
} from "@tabler/icons-react";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";
import { useTheme } from "styled-components";
import {
  ReadmeWrapper,
  JsonBlock,
  DocContent,
  CopyButton,
  TocContainer,
  TocList,
  TocItem,
  TocMobileToggle,
  MobileTocWrapper,
  BadgesRow,
  GithubButton,
  SideArea,
} from "./style";

function useIsMobile(breakpoint = 920) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler as any);
    else mq.addListener(handler as any);
    setIsMobile(mq.matches);
    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handler as any);
      else mq.removeListener(handler as any);
    };
  }, [breakpoint]);

  return isMobile;
}

const themeMeta = {
  name: "portfolio",
  private: true,
  version: "1.0.0",
  type: "module",
  description:
    "Portfólio pessoal (React + TypeScript) com temática inspirada no VS Code — temas dinâmicos, personalização de cores e sidebar responsivo.",
  author: "Abelardo Júnior <abelardo.junior.181@gmail.com>",
  license: "MIT",
  homepage: "https://seusite.com",
  repository: {
    type: "git",
    url: "git+https://github.com/seu-usuario/seu-repo.git",
  },
  keywords: ["portfolio", "react", "vite", "styled-components"],
  scripts: { dev: "vite", build: "tsc -b && vite build" },
};

const Readme: React.FC = () => {
  const theme = useTheme() as any;
  const jsonRef = useRef<HTMLPreElement | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const [active, setActive] = useState<string>("sobre");
  const [showTocMobile, setShowTocMobile] = useState<boolean>(false);
  const isMobile = useIsMobile(920);

  useEffect(() => {
    const topOffset = 140;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive((entry.target as HTMLElement).id);
        });
      },
      {
        root: null,
        rootMargin: `-${topOffset}px 0px -40% 0px`,
        threshold: 0.25,
      }
    );

    const headings = Array.from(
      document.querySelectorAll("h2[id], h3[id]")
    ) as HTMLElement[];
    headings.forEach((h) => {
      sectionsRef.current[h.id] = h;
      observer.observe(h);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
          16;
      if (nearBottom) {
        const ids = Object.keys(sectionsRef.current);
        const lastId = ids.length ? ids[ids.length - 1] : "credits";
        setActive(lastId);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(themeMeta, null, 2));
      if (jsonRef.current) jsonRef.current.dataset.copied = "true";
      setTimeout(() => {
        if (jsonRef.current) jsonRef.current.dataset.copied = "";
      }, 1400);
    } catch (e) {
      alert(
        "Não foi possível copiar automaticamente. Selecione e copie manualmente."
      );
    }
  };

  const goTo = (id: string) => {
    const el = sectionsRef.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ContainerPage>
      <SubTitle>README.md</SubTitle>
      {!isMobile && (
        <TocMobileToggle onClick={() => setShowTocMobile((s) => !s)}>
          Sumário
        </TocMobileToggle>
      )}
      <ReadmeWrapper>
        <DocContent>
          <BadgesRow>
            <img
              src="https://img.shields.io/badge/build-passing-brightgreen"
              alt="build"
            />
            <img
              src="https://img.shields.io/badge/license-MIT-blue"
              alt="license"
            />
            <GithubButton
              href="https://github.com/seu-usuario/seu-repo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </GithubButton>
          </BadgesRow>

          <h2
            id="sobre"
            ref={(el) => {
              sectionsRef.current["sobre"] = el;
            }}
          >
            Sobre este portfólio
          </h2>
          <p>
            Este portfólio foi desenvolvido para apresentar de forma clara e
            organizada minha trajetória profissional, principais projetos e
            stack tecnológica. A interface foi inspirada no Visual Studio Code,
            combinando um visual limpo e moderno com uma navegação fluida e
            personalizável.
          </p>

          <h3
            id="stack"
            ref={(el) => {
              sectionsRef.current["stack"] = el;
            }}
          >
            Stack principal
          </h3>
          <p>
            Este projeto foi construído com tecnologias modernas utilizadas no
            mercado, priorizando performance, escalabilidade e boas práticas:
          </p>
          <ul>
            <li>
              <IconBrandReact
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>React + TypeScript</strong> — base sólida e tipada para
              componentes reutilizáveis
            </li>
            <li>
              <IconBolt
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Vite</strong> — ferramenta de build extremamente rápida
            </li>
            <li>
              <IconBrush
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>styled-components</strong> — suporte a theming dinâmico e
              estilização modular
            </li>
            <li>
              <IconWorld
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>React Router</strong> — navegação fluida entre páginas
            </li>
          </ul>

          <h3
            id="features"
            ref={(el) => {
              sectionsRef.current["features"] = el;
            }}
          >
            Funcionalidades
          </h3>
          <p>
            As principais funcionalidades do projeto, apresentadas em ordem de
            impacto e utilidade:
          </p>
          <ul>
            <li>
              <IconMoon
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Temas dinâmicos e personalização — Dark, Light e Dracula com
              overrides de cor (persistidos em localStorage) para alinhar o
              visual à sua marca.
            </li>
            <li>
              <IconNavigation
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Navegação e UX do sidebar — menu hambúrguer responsivo, fechamento
              ao clicar fora, e transições suaves para entrada/saída.
            </li>
            <li>
              <IconDeviceMobile
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Experiência mobile aprimorada — projetos aparecem "abertos" por
              padrão no mobile, removendo a dependência de hover e melhorando
              descoberta.
            </li>
            <li>
              <IconPalette
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Persistência de preferências — seletores de cor e tema salvam
              escolhas em localStorage para consistência entre sessões.
            </li>
            <li>
              <IconListDetails
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Sumário (TOC) com sincronização de scroll — destaque automático de
              seção e navegação suave entre seções.
            </li>
            <li>
              <IconWind
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Polidez visual e desempenho — microanimações sutis, sombras e
              transições otimizadas para manter a fluidez sem penalizar a
              performance.
            </li>
            <li>
              <IconHome
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Integração prática: envio de contato/email (ex.: formulário que
              envia para um endpoint ou serviço de email), links para
              repositórios e deploys públicos.
            </li>
            <li>
              <IconBolt
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Build e deploy leves — Vite + otimizações de bundle para
              carregamento rápido e boa experiência inicial.
            </li>
            <li>
              <IconListDetails
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              Acessibilidade e navegação por teclado — foco nos controles
              principais, contrastes e leitura por leitores de tela.
            </li>
          </ul>

          <h3
            id="usage"
            ref={(el) => {
              sectionsRef.current["usage"] = el;
            }}
          >
            Como navegar
          </h3>
          <p>
            Esta página foi pensada especialmente para{" "}
            <strong>recrutadores e visitantes</strong>. Aqui está um guia rápido
            para explorar tudo:
          </p>
          <ul>
            <li>
              <IconHome
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Página inicial</strong> — visão geral dos projetos em
              destaque
            </li>
            <li>
              <IconUser
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Sobre mim</strong> — trajetória profissional, objetivos e
              forma de trabalho
            </li>
            <li>
              <IconBriefcase
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Projetos</strong> — detalhes sobre os trabalhos realizados
              e links para repositórios ou demos
            </li>
            <li>
              <IconBrain
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Habilidades</strong> — tecnologias que domino e aplico no
              dia a dia
            </li>
            <li>
              <IconFileCvFilled
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Experiências</strong> — trajetórias profissionais e
              principais conquistas.
            </li>
            <li>
              <IconAddressBook
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Contato</strong> — vamos conversar, estou aberto a novas
              oportunidades.
            </li>
            <li>
              <IconBrush
                size={18}
                color={theme.accent}
                style={{ verticalAlign: "middle" }}
              />{" "}
              <strong>Tema</strong> — personalize a aparência do site conforme
              sua preferência
            </li>
          </ul>

          <p>
            Use a <strong>barra lateral</strong> ou o <strong>sumário</strong>{" "}
            para navegar entre as seções. Todo o conteúdo foi estruturado para
            que você encontre rapidamente o que procura, sem precisar entender
            detalhes técnicos do projeto.
          </p>
        </DocContent>

        {!isMobile && showTocMobile && (
          <MobileTocWrapper>
            <TocList>
              <TocItem className={active === "sobre" ? "active" : ""}>
                <a
                  onClick={() => {
                    goTo("sobre");
                    setShowTocMobile(false);
                  }}
                >
                  Sobre
                </a>
              </TocItem>
              <TocItem className={active === "stack" ? "active" : ""}>
                <a
                  onClick={() => {
                    goTo("stack");
                    setShowTocMobile(false);
                  }}
                >
                  Stack
                </a>
              </TocItem>
              <TocItem className={active === "features" ? "active" : ""}>
                <a
                  onClick={() => {
                    goTo("features");
                    setShowTocMobile(false);
                  }}
                >
                  Funcionalidades
                </a>
              </TocItem>
              <TocItem className={active === "usage" ? "active" : ""}>
                <a
                  onClick={() => {
                    goTo("usage");
                    setShowTocMobile(false);
                  }}
                >
                  Como usar
                </a>
              </TocItem>
            </TocList>
          </MobileTocWrapper>
        )}
        {!isMobile && (
          <SideArea>
            <JsonBlock ref={jsonRef}>
              <CopyButton
                onClick={copyJson}
                data-state={jsonRef.current?.dataset.copied ? "copied" : ""}
              >
                {jsonRef.current?.dataset.copied ? "Copied!" : "Copy"}
              </CopyButton>
              {JSON.stringify(themeMeta, null, 2)}
            </JsonBlock>

            <TocContainer>
              <TocList>
                <TocItem className={active === "sobre" ? "active" : ""}>
                  <a onClick={() => goTo("sobre")}>Sobre</a>
                </TocItem>
                <TocItem className={active === "stack" ? "active" : ""}>
                  <a onClick={() => goTo("stack")}>Stack</a>
                </TocItem>
                <TocItem className={active === "features" ? "active" : ""}>
                  <a onClick={() => goTo("features")}>Funcionalidades</a>
                </TocItem>
                <TocItem className={active === "usage" ? "active" : ""}>
                  <a onClick={() => goTo("usage")}>Como usar</a>
                </TocItem>
              </TocList>
            </TocContainer>
          </SideArea>
        )}
      </ReadmeWrapper>
    </ContainerPage>
  );
};

export default Readme;
