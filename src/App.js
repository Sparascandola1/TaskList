import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

/**
 * This is the function style and no import is required
 */
const App = () => {
  /**
   * list of tasks to display on the webpage.
   *
   * the array has two props one is the actual that we pass back to the component later on. the second is a setTasks
   * **DISCLAIMER**
   * Still have not gotten to the part of the video which explains the second prop.
   *
   */
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  /**
   * Fetch Tasks
   *
   * @returns A list (Array) or Tasks
   */
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  /**
   * Fetch Task By ID
   *
   * @returns A Task
   */
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  /**
   * Add Task
   *
   * @param {Task} task
   */
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  };

  /**
   * Delete Task
   *
   * @param {Task ID} id
   */
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Toggle Reminder
   *
   * @param {TaskID} id
   */
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // this is a string variable that we can pass into the view through the header
  //const name = 'Sal';

  // REMINDER: you can only return one element from the function
  return (
    // this will return the header component that we designed
    <Router>
      <div className="container ">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {' '}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks to show'
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

/**
 * This is a class that renders a view. Above is the function style which would do the same thing.
 * REMINDER: You need to import React from "react" in order to user this style.
 */
// class App extends React.Component{
//   render(){
//     return <h1>Hello From a Class!</h1>
//   }
// }

export default App;
