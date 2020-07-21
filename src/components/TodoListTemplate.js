import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, palette, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">Todos</div>
      <div className="palette-wrapper">{palette}</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
