import React from "react";

/**
 * A React Error Boundary component that catches and handles JavaScript errors
 * in its child component tree.
 *
 * @example
 * ```
 * import React from 'react';
 * import ErrorBoundary from './ErrorBoundary';
 *
 * const App = () => (
 *   <ErrorBoundary>
 *     <MyComponent />
 *   </ErrorBoundary>
 * );
 * ```
 */
class ErrorBoundary extends React.Component {
  /**
   * Initializes the error boundary state.
   *
   * @param {Object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  /**
   * Catches and handles JavaScript errors in the child component tree.
   *
   * @param {Error} error - The error that occurred.
   * @param {Object} errorInfo - Additional error information.
   */
  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);

    // Display a fallback UI
    this.setState({ hasError: true, errorInfo: errorInfo });
  }

  /**
   * Renders the error boundary component.
   *
   * @returns {React.ReactNode} The rendered component.
   */
  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0",
            padding: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Something went wrong.
            </h2>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              Please try again later.
            </p>
            {/* You can also display more detailed error information */}
            {this.state.errorInfo && (
              <details
                style={{
                  whiteSpace: "pre-wrap",
                  padding: "10px",
                  backgroundColor: "#f7f7f7",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <summary
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Error details
                </summary>
                <pre
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                  }}
                >
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    // Render the child components if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;
