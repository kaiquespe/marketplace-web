export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const PRODUCT_STATUS = {
  ALL: 'all',
  PUBLISHED: 'published',
  SOLD: 'sold',
  INACTIVE: 'inactive',
} as const;

export const PRODUCT_STATUS_OPTIONS = [
  { label: "All status", value: PRODUCT_STATUS.ALL },
  { label: "Published", value: PRODUCT_STATUS.PUBLISHED },
  { label: "Sold", value: PRODUCT_STATUS.SOLD },
  { label: "Inactive", value: PRODUCT_STATUS.INACTIVE },
];

export const THEME = {
  colors: {
    primary: {
      base: '#FF6B00',
      dark: '#E65A00',
      light: '#FF8533',
    },
    gray: {
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
} as const;

export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Unauthorized access. Please sign in again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check the form for errors.',
} as const;

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_CREATE: '/product/create',
  PRODUCT_EDIT: '/product/:id',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const; 