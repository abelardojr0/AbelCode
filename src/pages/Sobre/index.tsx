import perfil from "../../assets/perfil.jpg";
import { PerfilPicture } from "./style";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";

export default function Sobre() {
  return (
    <ContainerPage>
      <SubTitle>Por Trás do Código</SubTitle>
      <PerfilPicture src={perfil} alt="Minha foto de perfil" />
      <p>
        Sempre fui aquele tipo de pessoa que desmontava o computador da família
        “só pra ver como funcionava”. A tecnologia sempre fez meus olhos
        brilharem, e foi por isso que decidi trilhar meu caminho na área de T.I.
        Me formei em Análise e Desenvolvimento de Sistemas em 2014, mas na época
        segui carreira no setor de Infraestrutura — onde desenvolvi uma baita
        capacidade de lidar com pessoas, resolver pepinos de todos os tamanhos e
        manter a calma mesmo quando “nada funcionadava” e o telefone não parava
        de tocar.
      </p>
      <p>
        Mas a paixão por desenvolver nunca saiu de mim. Em 2022, decidi dar um
        novo rumo à minha trajetória: mergulhei de cabeça no desenvolvimento de
        sistemas e comecei a construir a carreira de dev que lá atrás ficou só
        no papel. Desde então, tenho me dedicado todos os dias a aprender,
        evoluir e transformar ideias em soluções reais.
      </p>
      <p>
        Hoje atuo como Desenvolvedor FullStack, especialista em Front-End
        trabalhando com ReactJS, TypeScript, NodeJS e Python. Curto estar por
        dentro das novidades, experimentar tecnologias novas e transformar
        conceitos complexos em produtos claros e funcionais. Acredito que código
        bom não é só o que funciona — é o que resolve problemas de verdade e
        melhora a vida das pessoas que usam.
      </p>
      <p>
        Além disso, ensino programação para novos desenvolvedores,
        compartilhando meu conhecimento de forma divertiva e humanizada. Essa
        experiência de dar aulas me ensinou muito sobre comunicação, empatia e
        como traduzir o “tecniquês” para a linguagem do dia a dia.
      </p>
      <p>
        Gosto de ambientes colaborativos, de desafios que me tiram da zona de
        conforto e de trabalhar com pessoas que também têm brilho nos olhos pelo
        que fazem. Levo meu trabalho a sério, mas sem deixar o bom humor e a
        leveza de lado — porque no fim das contas, tecnologia é feita por
        pessoas e para pessoas.
      </p>
    </ContainerPage>
  );
}
