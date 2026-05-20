import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/notes"
            element={
              <ProtectedRoutes>
                <Notes />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;

// CSR
// Debugging
