import { vars } from 'nativewind';

export type Theme = {
  color: {
    background: string;
    surface: string;
    onBackground: string;
    onSurface: string;
    primary: string;
    onPrimary: string;
    border: string;
    muted: string;
    success: string;
    warning: string;
    error: string;
  };
  statusBar: { style: 'light' | 'dark'; background: string };
  radius: { sm: number; md: number; lg: number };
  space: { sm: number; md: number; lg: number };
};

export const lightTheme: Theme = {
  color: {
    background: '#FFFFFF',
    surface: '#F0FDF4',
    onBackground: '#111827',
    onSurface: '#14532D',
    primary: '#059669',
    onPrimary: '#FFFFFF',
    border: '#D1D5DB',
    muted: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626',
  },
  statusBar: { style: 'dark', background: '#FFFFFF' },
  radius: { sm: 6, md: 10, lg: 14 },
  space: { sm: 8, md: 12, lg: 16 },
};

export const darkTheme: Theme = {
  color: {
    background: '#111827',
    surface: '#1F2937',
    onBackground: '#F9FAFB',
    onSurface: '#E5E7EB',
    primary: '#34D399',
    onPrimary: '#111827',
    border: '#374151',
    muted: '#9CA3AF',
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
  },
  statusBar: { style: 'light', background: '#111827' },
  radius: { sm: 6, md: 10, lg: 14 },
  space: { sm: 8, md: 12, lg: 16 },
};

function flattenTheme(theme: Theme) {
  return {
    'color-background': theme.color.background,
    'color-surface': theme.color.surface,
    'color-onBackground': theme.color.onBackground,
    'color-onSurface': theme.color.onSurface,
    'color-primary': theme.color.primary,
    'color-onPrimary': theme.color.onPrimary,
    'color-border': theme.color.border,
    'color-muted': theme.color.muted,
    'color-success': theme.color.success,
    'color-warning': theme.color.warning,
    'color-error': theme.color.error,
    'radius-sm': theme.radius.sm,
    'radius-md': theme.radius.md,
    'radius-lg': theme.radius.lg,
    'space-sm': theme.space.sm,
    'space-md': theme.space.md,
    'space-lg': theme.space.lg,
  };
}

export const themes = {
  light: vars(flattenTheme(lightTheme)),
  dark: vars(flattenTheme(darkTheme)),
};