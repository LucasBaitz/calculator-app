"use client";
import { defaultTheme } from "@/components/Themes/themes";

const themeStorageKey = "appTheme";

export const saveThemePreference = (theme: Theme): void => {
  localStorage.setItem(themeStorageKey, JSON.stringify(theme));
};

export const getThemePreference = (): Theme => {
  const stringTheme = localStorage.getItem(themeStorageKey);
  if (!stringTheme) {
    return defaultTheme;
  }

  return JSON.parse(stringTheme);
};
