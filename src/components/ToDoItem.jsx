import classes from './ToDoItem.module.css';
import MyButton from './UI/MyButton';

const ToDoItem = ({number, todo, remove}) => {
  return (
    <div className={classes.todoItem}>
      <div>
        <h2><span>{number}</span>. {todo.title}</h2>
        <p className={classes.desc}>{todo.body}</p>
      </div>
      <MyButton onClick={() => remove(todo.id)}>
        Удалить
      </MyButton>
    </div>
  )
}

export default ToDoItem;
