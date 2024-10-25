import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Redirect to login page if token is missing
    if (!token) {
      navigate("/login");
    }

    // Optionally, you can also listen for storage changes
    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      if (!newToken) {
        // If the token is removed manually, navigate to login page
        navigate("/login");
      }
    };

    // Attach the event listener for `storage` changes
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  return <Outlet />; // If the token exists, render the protected component
};

export default ProtectedRoute;
