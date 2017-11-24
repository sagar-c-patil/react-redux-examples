import { ITodoListState, getdefaultDTodoListDataState } from "../state/index";
import { IAppAction } from "../app-action";
import { todoListDataStateActions } from "../actions/index";
import * as cuid from 'cuid';

const handlers = {
  [todoListDataStateActions.ADD_ITEM]: (state: ITodoListState, payload: any): ITodoListState => ({
    ...state,
    items: state.items.concat(
      [{ ...payload, id: cuid() }]
    )
  }),
  [todoListDataStateActions.DISPLAY_ITEMS_SUCCESS]: (state: ITodoListState, payload: any): ITodoListState => ({
    ...state,
    items: payload
  }),
  [todoListDataStateActions.SET_SELECTED_TO_DO_ITEM]: (state: ITodoListState, payload: any): ITodoListState => ({
    ...state,
    selectedTodoItem: payload
  }),
};

const toDoItemDataStateReducer = (state: ITodoListState = getdefaultDTodoListDataState(), action: IAppAction) => {
  return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action.payload) : state;
};

export default toDoItemDataStateReducer;
