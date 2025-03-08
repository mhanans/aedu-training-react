import React from 'react';
import { useTheme } from '../ThemeContext';

const Button: React.FC = () => {
  const theme = useTheme();
  return <button>{theme.mode} - {theme.color}</button>;
};

export default Button;