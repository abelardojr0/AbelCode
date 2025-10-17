import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 70vw;
  padding: 0px;
  animation: fadeIn 0.7s;
  position: relative;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export const PageTitle = styled.h1`
  color: #ff79c6;
  font-family: "Fira Code", monospace;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 28px;
  letter-spacing: 0.5px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 28px;
  padding: 10px 0 0 0;
  justify-items: center;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border-radius: 16px;
  padding: 18px 4px 8px 4px;
  box-shadow: none;
  min-width: 80px;
  max-width: 120px;
  transition: transform 0.15s;
  &:hover {
    transform: translateY(-2px) scale(1.04);
  }
  &:hover .skill-icon {
    filter: drop-shadow(0 0 8px #ff79c6cc) grayscale(0.1) brightness(1);
  }
`;

export const SkillIconWrap = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 8px;
  background: #23232e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #0002;
`;

export const SkillIcon = styled.img<{ neoncolor?: string }>`
  width: 62px;
  height: 62px;
  object-fit: contain;
  filter: grayscale(0.1) brightness(0.98);
  transition: filter 0.18s, box-shadow 0.18s;

  ${SkillCard}:hover & {
    filter: grayscale(0.1) brightness(1)
      drop-shadow(0 0 8px ${({ neoncolor }) => neoncolor || "#ff79c6"});
  }
`;

export const SkillName = styled.div`
  color: #bcbcbc;
  font-size: 13px;
  font-family: "Fira Code", monospace;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.1em;
`;
