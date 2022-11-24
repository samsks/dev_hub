import React from "react";
import GlobalLoading from "./components/GlobalLoading";
import AuthProvider from "./contexts/AuthContext";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalLoading>
          <MainRoutes />
        </GlobalLoading>
      </AuthProvider>
    </div>
  );
}

export default App;
