"use client";
import Calculator from "@/components/Calculator/Calculator";
import ThemeSelectorRadio from "@/components/ThemeSelectorRadio/ThemeSelectorRadio";
import {
  darkTheme,
  defaultTheme,
  lightTheme,
} from "@/components/Themes/themes";
import { getThemePreference, saveThemePreference } from "@/lib/themeStorage";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getThemePreference());

  useEffect(() => {
    setTheme(getThemePreference())
  }, [])

  const handleThemeSelection = (theme: Theme) => {
    setTheme(theme);
    saveThemePreference(theme);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ backgroundColor: theme.bodyColor }}
    >
      <div className="w-full flex justify-between items-center max-w-md">
        <p className="text-3xl" style={{ color: theme.textColor }}>
          calc
        </p>
        <div>
          <div className="flex align-middle items-center justify-center">
            <span className="text-xs mr-5" style={{ color: theme.textColor }}>
              THEME
            </span>
            <div className="flex flex-col w-full">
              <div className="w-full flex justify-around">
                <span className="text-xs" style={{ color: theme.textColor }}>
                  1
                </span>
                <span className="text-xs" style={{ color: theme.textColor }}>
                  2
                </span>
                <span className="text-xs" style={{ color: theme.textColor }}>
                  3
                </span>
              </div>
              <div
                className="flex gap-2 p-1 rounded-3xl"
                style={{ background: theme.displayColor }}
              >
                <label
                  className="flex text-xs flex-col justify-center align-middle items-center"
                  style={{ color: theme.textColor }}
                >
                  <ThemeSelectorRadio
                    selected={theme.bodyColor === defaultTheme.bodyColor}
                    theme={defaultTheme}
                    handleSelection={() => handleThemeSelection(defaultTheme)}
                  />
                </label>
                <label
                  className="flex text-xs flex-col justify-center align-middle items-center"
                  style={{ color: theme.textColor }}
                >
                  <ThemeSelectorRadio
                    selected={theme.bodyColor === lightTheme.bodyColor}
                    theme={lightTheme}
                    handleSelection={() => handleThemeSelection(lightTheme)}
                  />
                </label>
                <label
                  className="flex text-xs flex-col justify-center align-middle items-center"
                  style={{ color: theme.textColor }}
                >
                  <ThemeSelectorRadio
                    selected={theme.bodyColor === darkTheme.bodyColor}
                    theme={darkTheme}
                    handleSelection={() => handleThemeSelection(darkTheme)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Calculator theme={theme} />
    </main>
  );
};

export default Home;
