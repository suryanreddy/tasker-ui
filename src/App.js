import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:9000/tasker/findAll", {
      method: "GET",
      mode: "cors",
    });
    const data = await res.json();

    return data;
  };

  const deleteTask = async (taskId) => {
    const res = await fetch(`http://localhost:9000/tasker?taskId=${taskId}`, {
      method: "DELETE",
      mode: "cors",
    });
    console.log(res);
    res.status === 200
      ? setTasks(tasks.filter((task) => task.taskId !== taskId))
      : alert("Error Deleting This Task" + taskId);

    // await fetch(`http://localhost:9000/tasker?taskId=${id}`, {
    //   method: "DELETE",
    // });
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTask = async (task) => {
    const res = await fetch("http://localhost:9000/tasker/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    console.log(data);
    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Header />
      <AddTask saveTask={saveTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to be shown."
      )}
    </div>
  );
};

export default App;
