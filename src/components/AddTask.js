import React from "react";
import { useState } from "react";

const AddTask = ({ saveTask }) => {
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !taskDate) {
      alert("Please add a task");
      return;
    }

    saveTask({ description, taskDate });

    setDescription("");
    setTaskDate("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
