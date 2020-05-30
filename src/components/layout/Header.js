import React, { useState } from "react";
import { FaPizzaSlice, FaMoon, FaPlusCircle, FaPlus } from "react-icons/fa";
import { AddTask } from "../AddTask";
import sunlogo from "../../sun.svg";
// import moonlogo from "../../logoofme.svg";
import moonlogo from "../../moon.png";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <div>
      <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="Todoist" />
          </div>
          <div className="settings">
            <ul>
              <li className="settings__add">
                <button
                  data-testid="quick-add-task-action"
                  aria-label="Quick add task"
                  type="button"
                  onClick={() => {
                    setShouldShowMain(true);
                    setShowQuickAddTask(true);
                  }}
                  onKeyDown={() => {
                    setShouldShowMain(true);
                    setShowQuickAddTask(true);
                  }}
                >
                  <FaPlus className="plus-icon" />
                </button>
              </li>
              <li className="settings__darkmode">
                <button
                  data-testid="dark-mode-action"
                  aria-label="Darkmode on/off"
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  onKeyDown={() => setDarkMode(!darkMode)}
                >
                  <img
                    className={darkMode ? "sunlogo" : "moonlogo"}
                    src={darkMode ? sunlogo : moonlogo}
                    alt="React Logo"
                  />
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <AddTask
          showAddTaskMain={false}
          shouldShowMain={shouldShowMain}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      </header>
    </div>
  );
};
