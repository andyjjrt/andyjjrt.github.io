import themeColors from "daisyui/src/theming/themes.js";
import type { Theme } from "daisyui";

export const useTheme = () => {
  const themes = [
    "light",
    "dark",
  ];

  const colorSchema = (theme: string) => {
    return themeColors[`[data-theme=${theme}]` as `[data-theme=${Theme}]`];
  };

  return { themes, colorSchema };
};

export default useTheme;
