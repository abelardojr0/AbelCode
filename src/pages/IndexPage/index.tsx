import React from "react";
import { Container } from "./style";
import { useTheme } from "styled-components";
import logo from "../../assets/logo.png";
const IndexPage: React.FC = () => {
  const theme: any = useTheme();
  return (
    <Container>
      <img
        src={logo}
        alt="VS Code Logo"
        style={{ width: 250, marginBottom: 24, opacity: 0.9 }}
      />
      <h2
        style={{
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 8,
          color: theme.text,
          letterSpacing: 0.5,
        }}
      >
        Bem-vindo ao meu Portfólio!
      </h2>
      <div
        style={{
          color: theme.textSecondary,
          fontSize: 16,
          marginBottom: 32,
        }}
      >
        Selecione um arquivo no Explorer para começar.
      </div>
    </Container>
  );
};

export default IndexPage;
