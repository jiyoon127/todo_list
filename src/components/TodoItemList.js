import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({todos, onToggle, onRemove}) => {
  const todoList = todos.map(todo => (
    <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
  ));

  return <div>{todoList}</div>;
};

export default React.memo(
  TodoItemList,
  (prev, next) => prev.todos === next.todos,
);
