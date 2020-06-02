import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";
import PropTypes from "prop-types";

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  return (
    <>
      <div>
        <span className="sidebar__dot">•</span>

        <span className="sidebar__project-name">{project.name}</span>
      </div>
      <div>
        <span
          className="sidebar__project-delete"
          data-testid="delete-project"
          onClick={() => setShowConfirm(!showConfirm)}
          onKeyDown={() => setShowConfirm(!showConfirm)}
        >
          <FaTrashAlt />

          {showConfirm && (
            <div className="project-delete-modal">
              <div className="project-delete-modal__inner">
                <div>
                  <p>Are you sure you want to delete this project?</p>
                </div>
                <div className="project-delete-modal__group">
                  <button
                    type="button"
                    onClick={() => deleteProject(project.docId)}
                  >
                    Delete
                  </button>

                  <span onClick={() => setShowConfirm(!showConfirm)}>
                    Cancel
                  </span>
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
