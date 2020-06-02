import React from "react";
import { firebase } from "../firebase";
import PropTypes from "prop-types";

export const CheckBox = ({ id }) => {
  const archiveTask = () => {
    console.log("I am from CheckBox");
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};
