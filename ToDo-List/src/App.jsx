import { useState } from 'react';

import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
    todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => ( //irá revisar todos os "ToDos" e classifica-los abaixo
          <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} /> //deixa linkado com o ToDo.jsx por meio da const ToDo = ({todo})
        ))}
      </div>
      <ToDoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
