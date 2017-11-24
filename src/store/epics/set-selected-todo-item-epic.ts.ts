
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';

import { IAppState } from '../state';
import { IAppAction } from '../app-action';
import { todoListDataStateActions } from '../actions/index';

import { push } from 'react-router-redux';
import { routes } from '../../routes';
import { Observable } from 'rxjs/Observable';

export const setSelectedTodoItem = (action$: ActionsObservable<IAppAction>, store: Store<IAppState>, { }) => {
  return action$.ofType(todoListDataStateActions.SET_SELECTED_TO_DO_ITEM)
    .mergeMap(() => {
      const todoListState = store.getState().todoListState;
      const selectedItemId = todoListState.selectedTodoItem != null ? todoListState.selectedTodoItem.id : '0';
      return Observable.of(push(routes.todoItemDetail(selectedItemId)));
    }
    );
}
