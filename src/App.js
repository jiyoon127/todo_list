import React, {useState} from 'react';
import TodolistTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const App = () => {
  const [id, setId] = useState(3);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: 'react', checked: false},
    {id: 1, text: 'react', checked: true},
    {id: 2, text: 'react', checked: false},
  ]);
  const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
  const [color, setColor] = useState('#343a40');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleCreate = () => {
    setInput('');
    setId(id + 1);
    setTodos(
      todos.concat({
        id: id,
        text: input,
        checked: false,
        color,
      }),
    );
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleToggle = id => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    setTodos(nextTodos);
  };

  const handleRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSelectColor = color => {
    setColor(color);
  };

  return (
    <TodolistTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      }
      palette={
        <Palette
          colors={colors}
          selected={color}
          onSelect={handleSelectColor}
        />
      }>
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodolistTemplate>
  );
};

export default App;
