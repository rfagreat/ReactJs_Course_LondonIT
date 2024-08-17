// src/AuthContext.js
import React, { createContext, useState, useContext } from "react";

/**
 * Creates a Context for authentication.
 *
 * This context provides a way to share authentication state and functions
 * between components.
 */
const AuthContext = createContext();

/**
 * Provides authentication state and functions to its child components.
 *
 * @param {ReactNode} children - The child components to render.
 */
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  /**
   * Logs in a user with the provided user data.
   *
   * @param {Object} userData - The user data to log in with.
   */
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  /**
   * Logs out the current user.
   */
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * A custom hook to use the AuthContext.
 *
 * Returns an object with the current authentication state and functions.
 *
 * @example
 * import React from 'react';
 * import { useAuth } from './AuthContext';
 *
 * function MyComponent() {
 *   const { isAuthenticated, user, login, logout } = useAuth();
 *
 *   if (!isAuthenticated) {
 *     return <button onClick={() => login({ name: 'John Doe' })}>Log in</button>;
 *   } else {
 *     return (
 *       <div>
 *         <p>Welcome, {user.name}!</p>
 *         <button onClick={logout}>Log out</button>
 *       </div>
 *     );
 *   }
 * }
 */
export function useAuth() {
  return useContext(AuthContext);
}
