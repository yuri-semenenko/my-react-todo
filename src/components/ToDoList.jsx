import ToDoItem from './ToDoItem';

import classes from './ToDoList.module.css';

const ToDoList = ({todos, remove}) => {
  return (
    <section className={classes.list}>
      <h1>To-Do list</h1>
      <ul>
        {todos.map((item, index) =>
          <li key={item.id}>
            <ToDoItem number={index + 1} todo={item} remove={remove} />
          </li>
        )}
      </ul>
    </section>
  );
}

export default ToDoList;
