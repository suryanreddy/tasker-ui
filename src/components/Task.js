import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.description}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.taskId)}
        />
      </h3>
      <p>{task.taskDate}</p>
    </div>
  );
};

export default Task;
