import styled from "styled-components";

export const ThemePanel = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 480px;
`;

export const ThemeList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
`;

export const ThemeOption = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 #0002;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 16px 0 #0004;
  }
`;

export const ColorPickerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
`;

export const ColorLabel = styled.label`
  color: #bcbcbc;
  font-size: 1rem;
`;

export const ColorInput = styled.input`
  width: 36px;
  height: 36px;
  border: none;
  background: none;
  cursor: pointer;
`;
