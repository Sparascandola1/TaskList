import { useState } from 'react';

/**
 * Create new tasks using the inputs and save it to the list using state. 
 * 
 * @param {onAdd} param0 
 * @returns 
 */
const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  /**
   * onSubmit
   *
   * @param {Event from submit button} e
   * @returns
   */
  const onSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert('Please add a task');
      return;
    }

    // set new task with the new task, day, and reminder thru onAdd
    onAdd({ text: task, day, reminder });

    // clear all the inputs 
    setTask('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
