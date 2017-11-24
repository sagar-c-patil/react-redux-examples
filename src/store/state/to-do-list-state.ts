import { IToDoItem } from "../../models/index";

export interface ITodoListState {
  items: Array<IToDoItem>;
  selectedTodoItem: IToDoItem | null;
}

const defaultState: ITodoListState = {
  items: [],
  selectedTodoItem: null
}

export const getdefaultDTodoListDataState = (): ITodoListState => {
  return {
    ...defaultState
  }
}