// Libraries
import React from "react";
import {
  ErrorBoundary as ErrBoundary,
  FallbackProps,
} from "react-error-boundary";

// Components
import { Button } from "../ui/button";

interface ErrorBoundaryProps {
  path: string;
  children: React.ReactNode;
}
function ErrorBoundary({ path, children }: ErrorBoundaryProps) {
  const handleLogError = (
    { name, message, stack }: Error,
    { componentStack }: React.ErrorInfo,
  ) => {
    console.error({ name, path, message, stack, componentStack });
  };

  const fallbackComponent = (fallbackProps: FallbackProps) => {
    const { error, resetErrorBoundary } = fallbackProps;

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <Button onClick={resetErrorBoundary}>Click to retry</Button>
      </div>
    );
  };

  return (
    <ErrBoundary FallbackComponent={fallbackComponent} onError={handleLogError}>
      {children}
    </ErrBoundary>
  );
}
export default ErrorBoundary;
