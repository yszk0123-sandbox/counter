import { ColorPalette, FontSize, ThemeInterface } from './theme-type';

export const defaultTheme: ThemeInterface = {
  borderColorBg: ColorPalette.GRAY,
  buttonColorBg: ColorPalette.SECONDARY,
  buttonColorFg: ColorPalette.WHITE,
  fontSize: {
    [FontSize.SMALL]: '1.2rem',
    [FontSize.DEFAULT]: '1.6rem',
    [FontSize.LARGE]: '2rem',
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
  },
  headerColorBg: ColorPalette.PRIMARY,
  headerColorFg: ColorPalette.WHITE,
  loadingColorFg: ColorPalette.SECONDARY,
  space: 8,
  thinkSpace: 4,
};
