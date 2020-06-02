import React, { useState } from "react";
import { Projects } from "../Projects";

import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <>
      {!showSidebar && (
        <div className="showMenu" onClick={() => setShowSidebar(true)}>
          <div>
            <img
              alt="arrow"
              src="https://www.animatedimages.org/data/media/111/animated-arrow-image-0113.gif"
            />
          </div>
          <button>
            <p>Click to Show Menu</p>
          </button>
        </div>
      )}

      <div
        className={showSidebar ? "sidebar" : "hideSidebar"}
        data-testid="sidebar"
      >
        <ul className="sidebar__generic">
          <li
            data-testid="inbox"
            className={active === "inbox" ? "active" : undefined}
          >
            <div
              data-testid="inbox-action"
              aria-label="Show inbox tasks"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive("inbox");
                setSelectedProject("INBOX");
              }}
              onKeyDown={() => {
                setActive("inbox");
                setSelectedProject("INBOX");
              }}
            >
              <span>
                <img
                  alt="inbox"
                  src="https://img.icons8.com/cute-clipart/64/000000/inbox.png"
                />
              </span>
              <span>Inbox</span>
            </div>
          </li>
          <li
            data-testid="today"
            className={active === "today" ? "active" : undefined}
          >
            <div
              data-testid="today-action"
              aria-label="Show today's tasks"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive("today");
                setSelectedProject("TODAY");
              }}
              onKeyDown={() => {
                setActive("today");
                setSelectedProject("TODAY");
              }}
            >
              <span>
                <img
                  alt="today"
                  src="https://img.icons8.com/fluent/48/000000/today.png"
                />
              </span>
              <span>Today</span>
            </div>
          </li>

          <li
            data-testid="next_7"
            className={active === "next_7" ? "active" : undefined}
          >
            <div
              data-testid="next_7-action"
              aria-label="Show tasks for the next 7 days"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive("next_7");
                setSelectedProject("NEXT_7");
              }}
              onKeyDown={() => {
                setActive("next_7");
                setSelectedProject("NEXT_7");
              }}
            >
              <span>
                <img
                  alt="tomorrow"
                  src="https://img.icons8.com/fluent/48/000000/calendar.png"
                />
              </span>
              <span>Next 7 days</span>
            </div>
          </li>
        </ul>
        <div
          className="sidebar__middle"
          aria-label="Show/hide projects"
          onClick={() => setShowProjects(!showProjects)}
          onKeyDown={() => setShowProjects(!showProjects)}
          role="button"
          tabIndex={0}
        >
          <span>
            <img
              alt="dropdown"
              className={!showProjects ? "hidden-projects" : undefined}
              src="https://img.icons8.com/fluent/48/000000/expand-arrow.png"
            />
          </span>
          <h2>Projects</h2>
        </div>

        <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

        {showProjects && <AddProject />}
      </div>
    </>
  );
};
