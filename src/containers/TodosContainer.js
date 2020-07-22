import React from 'react';
import {connect} from 'react-redux';
import TodolistTemplate from '../components/TodoListTemplate';
import Form from '../components/Form';
import TodoItemList from '../components/TodoItemList';
import Palette from '../components/Palette';
import * as actions from '../actions';

const TodosContainer = ({
  input,
  color,
  todos,
  handleKeyPress,
  handleInput,
  handleCreate,
  handleToggle,
  handleRemove,
  handleSelectColor,
}) => {
  const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

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

const mapStateToProps = state => ({
  input: state.input,
  color: state.color,
  todos: state.todos,
});

const mapToDispatch = dispatch => ({
  handleInput: e => dispatch(actions.handleInput(e)),
  handleCreate: () => dispatch(actions.handleCreate()),
  handleKeyPress: e => {
    if (e.key === 'Enter') dispatch(actions.handleCreate());
  },
  handleToggle: id => dispatch(actions.handleToggle(id)),
  handleRemove: id => dispatch(actions.handleRemove(id)),
  handleSelectColor: color => dispatch(actions.handleSelectColor(color)),
});

export default connect(mapStateToProps, mapToDispatch)(TodosContainer);
