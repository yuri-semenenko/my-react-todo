import './App.css';
import ToDoList from './components/ToDoList';
import CreateToDoForm from './components/CreateToDoForm';
import {useMemo, useState} from 'react';
import ToDoFilter from './components/ToDoFilter';

const todosList = [
  {id: 1, title: "first task", body: "Need to create an App", priority: 0, state: "completed"},
  {id: 2, title: "second task", body: "Add some styles to App", priority: 3, state: "active"},
  {id: 3, title: "third task", body: "create some components", priority: 1, state: "completed"},
  {id: 4, title: "fourth task", body: "create some UI", priority: 2, state: "active"},
  {id: 5, title: "fifth task", body: "add some logic", priority: 0, state: "active"},
  {id: 6, title: "test task", body: "some description for this task", priority: 1, state: "deleted"},
];

function App() {
  const [todos, setTodos] = useState(todosList);
  const [filter, setFilter] = useState({ sort: '', query: ''});

  const sortedToDos = useMemo(() => {
    console.log("Отработала getSortedToDos");
    if (filter.sort) {
      if (filter.sort === 'title') {
        return [...todos].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      }

      if (filter.sort === 'priority') {
        return [...todos].sort((a, b) => a[filter.sort] - b[filter.sort]);
      }
    }

    return todos;
  }, [filter.sort, todos]);

  const sortedAndSearchedToDos = useMemo(() => {
    return sortedToDos.filter((todo) => todo.title.toLowerCase().includes(filter.query));
  }, [sortedToDos, filter.query]);

  const createToDo = (newToDo) => {
    setTodos([...todos, newToDo]);
  }

  const removeToDo = (toDoId) => {
    setTodos(todos.filter(item => item.id !== toDoId));
  }

  return (
    <div className="container">
      <CreateToDoForm create={createToDo} />
      <ToDoFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedToDos.length
        ?
        <ToDoList todos={sortedAndSearchedToDos} remove={removeToDo}/>
        :
        <div style={{padding: "15px 0"}}>
          <h1 style={{fontSize: "1.5em", margin: "15px 0"}}>Список задач пуст.</h1>
        </div>
      }

    </div>
  );
}

export default App;
