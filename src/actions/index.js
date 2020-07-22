import * as types from '../constants/ActionTypes';

export const handleInput = e => ({
  type: types.CHANGE_INPUT,
  e,
});

export const handleCreate = () => ({
  type: types.CREATE,
});

export const handleKeyPress = e => ({
  type: types.KEY_PRESS,
  e,
});

export const handleToggle = id => ({
  type: types.TOGGLE_CHECK,
  id,
});

export const handleRemove = id => ({
  type: types.REMOVE,
  id,
});

export const handleSelectColor = color => ({
  type: types.SELECT_COLOR,
  color,
});
