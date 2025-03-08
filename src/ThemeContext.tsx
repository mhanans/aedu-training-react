import React, { createContext, useContext, ReactNode } from 'react';

// Definisi tipe untuk Theme
interface Theme {
  mode: 'light' | 'dark';
  color: string;
}

// Buat ThemeContext dengan nilai default
export const ThemeContext = createContext<Theme>({ mode: 'light', color: 'blue' });

// Komponen ThemeProvider dengan tipe props yang benar
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ mode: 'dark', color: 'red' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Fungsi helper untuk menggunakan context (opsional)
export const useTheme = () => useContext(ThemeContext);