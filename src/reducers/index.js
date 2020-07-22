import * as types from '../constants/ActionTypes';

let id = 3;
const initialSate = {
  input: '',
  todos: [
    {id: 0, text: 'Initial', checked: false},
    {id: 1, text: 'Todo', checked: true, color: '#228ae6'},
    {id: 2, text: 'List', checked: false, color: '#12b886'},
  ],
  color: '#343a40',
};

const toods = (state = initialSate, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return {
        ...state,
        input: action.e.target.value,
      };
    case types.CREATE:
      return {
        ...state,
        input: '',
        todos: state.todos.concat({
          id: id++,
          text: state.input,
          checked: false,
          color: state.color,
        }),
      };
    case types.TOGGLE_CHECK:
      const index = state.todos.findIndex(todo => todo.id === action.id);
      const selected = state.todos[index];

      const nextTodos = [...state.todos];

      nextTodos[index] = {
        ...selected,
        checked: !selected.checked,
      };
      return {
        ...state,
        todos: nextTodos,
      };
    case types.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case types.SELECT_COLOR:
      console.log(action.color);
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export default toods;
