import React, { useContext, useState, useEffect } from "react";
import { ContainerPage, SubTitle } from "../../styles/GlobalStyles";
import {
  ThemePanel,
  ThemeList,
  ThemeOption,
  ColorPickerRow,
  ColorLabel,
  ColorInput,
} from "./style";
import { AppThemeContext } from "../../main";
import { useTheme } from "styled-components";

const Theme: React.FC = () => {
  const { themeName, toggleTheme, setCustomColors } =
    useContext(AppThemeContext);
  const theme: any = useTheme();

  const rgbToHex = (c: string, fallback = "#000000") => {
    if (!c) return fallback;
    if (c.startsWith("#")) return c;
    const m = c.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
    if (!m) return fallback;
    const r = parseInt(m[1], 10);
    const g = parseInt(m[2], 10);
    const b = parseInt(m[3], 10);
    const toHex = (v: number) => v.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const [primaryColor, setPrimaryColor] = useState<string>("#3c99d4");
  const [bgColor, setBgColor] = useState<string>("#23242b");

  useEffect(() => {
    try {
      setPrimaryColor(rgbToHex(theme.text || "", "#3c99d4"));
      setBgColor(rgbToHex(theme.backgroundContent || "", "#23242b"));
    } catch (e) {}
  }, [theme]);

  return (
    <ContainerPage>
      <SubTitle>Temas</SubTitle>
      <ThemePanel>
        <ThemeList>
          <ThemeOption
            onClick={() => toggleTheme("dark")}
            style={{
              background:
                themeName === "dark"
                  ? theme.backgroundSidebar
                  : theme.background,
              color: theme.text,
              outline:
                themeName === "dark" ? `3px solid ${theme.accentCyan}` : "none",
            }}
          >
            Dark
          </ThemeOption>
          <ThemeOption
            onClick={() => toggleTheme("light")}
            style={{
              background:
                themeName === "light"
                  ? theme.backgroundSidebar
                  : theme.background,
              color: theme.text,
              outline:
                themeName === "light"
                  ? `3px solid ${theme.accentCyan}`
                  : "none",
            }}
          >
            Light
          </ThemeOption>
          <ThemeOption
            onClick={() => toggleTheme("dracula")}
            style={{
              background:
                themeName === "dracula"
                  ? theme.backgroundSidebar
                  : theme.background,
              color: theme.text,
              outline:
                themeName === "dracula"
                  ? `3px solid ${theme.accentCyan}`
                  : "none",
            }}
          >
            Dracula
          </ThemeOption>
        </ThemeList>
        <ColorPickerRow>
          <ColorLabel htmlFor="primaryColor">Cor primária</ColorLabel>
          <ColorInput
            type="color"
            id="primaryColor"
            value={primaryColor}
            onChange={(e) => {
              setPrimaryColor(e.target.value);
              setCustomColors(e.target.value, undefined);
            }}
          />
        </ColorPickerRow>
        <ColorPickerRow>
          <ColorLabel htmlFor="bgColor">Cor de fundo</ColorLabel>
          <ColorInput
            type="color"
            id="bgColor"
            value={bgColor}
            onChange={(e) => {
              setBgColor(e.target.value);
              setCustomColors(undefined, e.target.value);
            }}
          />
        </ColorPickerRow>
      </ThemePanel>
    </ContainerPage>
  );
};

export default Theme;
