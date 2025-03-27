import { useColorMode } from "@vueuse/core";

export const useTheme = () => {
  const mode = useColorMode({
    attribute: "data-theme",
    emitAuto: false,
    modes: {
      light: "nord",
      dark: "sunset",
    },
  });

  return { mode };
};
