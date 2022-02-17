import React, {useState} from 'react';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';
import classes from './CreateToDoForm.module.css';
import MySelect from './UI/MySelect';

const CreateToDoForm = ({create}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('');

  const addNewToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      id: Date.now(),
      title,
      body,
      priority,
      state: "active"
    }

    create(newToDo);
    setTitle('');
    setBody('');
    setPriority('');
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
        <MySelect
          defaultValue="Выберите приоритет"
          options={[
            { name: "critical", value: 0 },
            { name: "high", value: 1 },
            { name: "middle", value: 2 },
            { name: "low", value: 3 },
          ]}
          value={priority}
          change={setPriority}
        />
      </div>
      <div>
        <MyButton onClick={addNewToDo}>Добавить</MyButton>
      </div>
    </form>
  );
};

export default CreateToDoForm;
