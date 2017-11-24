import { IAppAction } from '../app-action'
import { IToDoItem } from '../../models/index';

export const todoListDataStateActions = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  DISPLAY_ITEMS: 'DISPLAY_ITEMS',
  DISPLAY_ITEMS_SUCCESS: 'DISPLAY_ITEMS_SUCCESS',
  DISPLAY_ITEMS_ERROR: 'DISPLAY_ITEMS_ERROR',
  SET_SELECTED_TO_DO_ITEM: 'SET_SELECTED_TO_DO_ITEM'
};

export const addItem = (item: IToDoItem): IAppAction => ({
  type: todoListDataStateActions.ADD_ITEM,
  payload: item
});

export const addItemSuccess = (item: IToDoItem): IAppAction => ({
  type: todoListDataStateActions.ADD_ITEM_SUCCESS,
  payload: item
});

export const addItemError = (appError: any): IAppAction => ({
  type: todoListDataStateActions.ADD_ITEM_ERROR,
  payload: appError
});

export const displayItems = (): IAppAction => ({
  type: todoListDataStateActions.DISPLAY_ITEMS
});

export const displayItemsSuccess = (items: Array<IToDoItem>): IAppAction => ({
  type: todoListDataStateActions.DISPLAY_ITEMS_SUCCESS,
  payload: items
});

export const displayItemsError = (appError: any): IAppAction => ({
  type: todoListDataStateActions.DISPLAY_ITEMS_ERROR,
  payload: appError
});

export const setSelectedTodoItem = (item: IToDoItem): IAppAction => ({
  type: todoListDataStateActions.SET_SELECTED_TO_DO_ITEM,
  payload: item
});