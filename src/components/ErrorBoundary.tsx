import React, { ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

// Gunakan PropsWithChildren untuk mendefinisikan children
class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <p>Oops, something went wrong!</p>;
    return this.props.children;
  }
}

export default ErrorBoundary;