import ToDoItem from './ToDoItem';

import classes from './ToDoList.module.css';

const ToDoList = ({todos, remove}) => {

  if (!todos.length) {
    return (
      <div style={{padding: "15px 0"}}>
        <h1 style={{fontSize: "1.5em", margin: "15px 0"}}>Список задач пуст.</h1>
      </div>
    );
  }

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
