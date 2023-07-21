import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isconnected, setIsconnected] = useState(false);

  useEffect(() => {
    // Check if the user data is available in local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsconnected(true);
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    // Store the token and user data in local storage
    localStorage.setItem("token", token);

    // Fetch user data from the server using the token
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUser(response.data.user);
        setIsconnected(true);
        // Store the user data in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    // Remove the token and user data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser({});
    setIsconnected(false);
  };

  // Use useMemo to memoize the value object
  const authContextValue = useMemo(
    () => ({ user, setUser, isconnected, setIsconnected, login, logout }),
    [user, isconnected]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AuthContext, AuthProvider };
