import React, { useEffect, useState } from "react";
import { CheckBox } from "./Checkbox";
import { useTasks } from "../hooks/index";
import { collatedTasks } from "../constants";
import { AddTask } from "./AddTask";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import taskImage from "../task.png";

export const Tasks = () => {
  const [showDefault, setShowDefault] = useState(true);
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  useEffect(() => {
    document.title = `${projectName}: Doist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <CheckBox id={task.id}></CheckBox>
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask setshowDefault={setShowDefault} />

      {tasks.length === 0 && showDefault ? (
        <div className="tasks__image">
          <img src={taskImage} alt="" />
          <h3>Keep your tasks organized in projects</h3>
          <p>Group your tasks by goal or area of your life.</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
