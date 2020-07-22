import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodolistTemplate from '../components/TodoListTemplate';
import Form from '../components/Form';
import TodoItemList from '../components/TodoItemList';
import Palette from '../components/Palette';
import * as actions from '../actions';

const TodosContainer = () => {
  const { input, color, todos } = useSelector(state => ({
    input: state.input,
    color: state.color,
    todos: state.todos,
  }));
  const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
  const dispatch = useDispatch();

  const handleInput = e => dispatch(actions.handleInput(e));

  const handleCreate = () => dispatch(actions.handleCreate());

  const handleKeyPress = e => {
    if (e.key === 'Enter') dispatch(actions.handleCreate());
  };

  const handleToggle = id => dispatch(actions.handleToggle(id));

  const handleRemove = id => dispatch(actions.handleRemove(id));

  const handleSelectColor = color => dispatch(actions.handleSelectColor(color));

  return (
    <TodolistTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleInput}
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

export default TodosContainer;
