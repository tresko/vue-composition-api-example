import { provide, inject } from "@vue/composition-api";

const ThemeSymbol = Symbol();

export function useProvideTheme() {
  provide(ThemeSymbol, "dark");
}

export function useTheme() {
  return inject(ThemeSymbol, "light");
}
