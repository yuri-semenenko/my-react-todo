import React, {useState} from 'react';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';
import classes from './CreateToDoForm.module.css';

const CreateToDoForm = ({create}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      id: Date.now(),
      title,
      body
    }

    create(newToDo);
    setTitle('');
    setBody('');
  }

  return (
    <form className={classes.form}>
      <div>
        <MyInput type="text" placeholder="Имя задачи" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <MyInput type="text" placeholder="Описание задачи" value={body} onChange={(e) => setBody(e.target.value)}/>
      </div>
      <div>
        <MyButton onClick={addNewToDo}>Добавить</MyButton>
      </div>
    </form>
  );
};

export default CreateToDoForm;
