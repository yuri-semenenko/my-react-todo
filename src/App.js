import './App.css';
import ToDoList from './components/ToDoList';
import CreateToDoForm from './components/CreateToDoForm';
import {useState} from 'react';

const todosList = [
  {id: 1, title: "first task", body: "Need to create an App"},
  {id: 2, title: "second task", body: "Add some styles to App"},
  {id: 3, title: "third task", body: "create some components"},
  {id: 4, title: "fourth task", body: "create some UI"},
  {id: 5, title: "fifth task", body: "add some logic"},
];

function App() {
  const [todos, setTodos] = useState(todosList);

  const createToDo = (newToDo) => {
    setTodos([...todos, newToDo]);
  }

  const removeToDo = (toDoId) => {
    setTodos(todos.filter(item => item.id !== toDoId));
  }

  return (
    <div className="container">
      <CreateToDoForm create={createToDo} />
      <ToDoList todos={todos} remove={removeToDo}/>
    </div>
  );
}

export default App;
