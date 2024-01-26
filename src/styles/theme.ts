const windowSize = {
  small: 'screen and (min-width: 600px)',
};

const fontSize = {
  xxs: '11px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '17px',
  xl: '20px',
  '2xl': '24px',
};

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

const textStyle = {
  title100: {
    'font-size': '20px',
    'line-height': '26px',
    'letter-spacing': -1,
  },
  title200: {
    'font-size': '17px',
    'line-height': '24px',
    'letter-spacing': 1,
  },
  body100: {
    'font-size': '16px',
    'line-height': '26px',
  },

  body200: {
    'font-size': '14px',
    'line-height': '24px',
    'letter-spacing': -2,
  },
  label100: {
    'font-size': '16px',
    'line-height': '20px',
    'letter-spacing': 1,
  },
  label200: {
    'font-size': '14px',
    'line-height': '20px',
    'letter-spacing': 1,
  },

  caption100: {
    'font-size': '12px',
    'line-height': '16px',
    'letter-spacing': 2,
  },
  caption200: {
    'font-size': '11px',
    'line-height': '14px',
  },
};

export const color = {
  gray25: '#F7F7F8',
  gray50: '#EFEFF1',
  gray100: '#E4E5E8',
  gray200: '#CECFD6',
  gray300: '#B1B2BE',
  gray400: '#9496A8',
  gray500: '#7B7D8E',
  gray600: '#606376',
  gray700: '#494B5A',
  gray800: '#32343E',
  gray900: '#1C1C22',
  blue50: '#E8F6FE',
  blue100: '#D4EFFE',
  blue200: '#A9DCFE',
  blue300: '#7FC4FD',
  blue400: '#5EAEFC',
  blue500: '#2A8AFB',
  blue600: '#1E6BD7',
  blue700: '#154FB4',
  blue800: '#0D3791',
  blue900: '#082678',
  red50: '#FFF2EB',
  red100: '#FFE5D6',
  red200: '#FFC5AE',
  red300: '#FF9E85',
  red400: '#FF7967',
  red500: '#FF3C35',
  red600: '#DB262F',
  red700: '#B71A2F',
  red800: '#93102D',
  red900: '#7A0A2C',
  orange50: '#FFF7E6',
  orange100: '#FFEFCD',
  orange200: '#FFDA9B',
  orange300: '#FFC36A',
  orange400: '#FFAB45',
  orange500: '#FF8707',
  orange600: '#DB6C05',
  orange700: '#B75103',
  orange800: '#933C02',
  orange900: '#7A2B01',
  green500: '#35DB80',
  black: '#000000',
  white: '#FFFFFF',
  bg: '#F7F7F8',
  wrapBg: '#E4E5E8',
  footerbg: '#EFEFF1',
  kakao: '#FEE500',
} as const;

const boxShadow = {
  '16dp': '0px 4px 16px 0px rgba(0, 0, 0, 0.04)',
};

export const theme = {
  windowSize,
  color,
  fontSize,
  fontWeight,
  textStyle,
  boxShadow,
};

export type ThemeType = typeof theme;
