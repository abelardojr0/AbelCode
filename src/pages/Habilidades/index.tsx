import React from "react";
import {
  SkillsGrid,
  SkillCard,
  SkillIconWrap,
  SkillIcon,
  SkillName,
} from "./style";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";
import { skills } from "./skills";

const Habilidades: React.FC = () => {
  return (
    <ContainerPage>
      <SubTitle>Minhas Habilidades</SubTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIconWrap>
              <SkillIcon
                src={skill.icon}
                alt={skill.name}
                neoncolor={skill.color}
              />
            </SkillIconWrap>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </ContainerPage>
  );
};

export default Habilidades;
