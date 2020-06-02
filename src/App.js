import React, { useState } from "react";
import { Header } from "../src/components/layout/Header";
import { Content } from "../src/components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          ></Header>

          <Content
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          ></Content>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
