import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <section className="content">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Tasks />
      </section>
    </>
  );
};
