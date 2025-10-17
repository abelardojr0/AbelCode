import React from "react";
import {
  TimelineContainer,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelinePeriod,
  TimelineTitle,
  TimelineCompany,
  TimelineDescription,
  TimelineLine,
} from "./style";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";
import { experiences } from "./xp";

export const Experiencia: React.FC = () => {
  return (
    <ContainerPage>
      <SubTitle>Minha Trajetória</SubTitle>
      <TimelineContainer>
        <TimelineLine />
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineDot />
            <TimelineContent>
              <TimelinePeriod>{exp.period}</TimelinePeriod>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineCompany>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    style={{
                      height: 22,
                      width: 22,
                      objectFit: "contain",
                      marginRight: 8,
                      verticalAlign: "middle",
                      borderRadius: 4,
                      background: "#181920",
                    }}
                  />
                )}
                {exp.company}
              </TimelineCompany>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ContainerPage>
  );
};

export default Experiencia;
