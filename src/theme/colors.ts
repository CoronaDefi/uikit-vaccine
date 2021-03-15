import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#106DBA",
  primaryBright: "#106DBA",
  primaryDark: "#106DBA",
  secondary: "#2d2d2d",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#106DBA",
  textDisabled: "#BDC2C4",
  textSubtle: "#106DBA",
  borderColor: "#524B63",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #106DBA 0%, #D3362A 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#106DBA",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#000000",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#106DBA",
  textDisabled: "#666171",
  textSubtle: "#106DBA",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
