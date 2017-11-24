
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';

import { IAppState } from '../state';
import { IAppAction } from '../app-action';
import { todoListDataStateActions, displayItemsSuccess } from '../actions/index';
import { MockTodoItems } from '../../helpers/mock-helpers';

export const fetchTodoItemsEpic = (action$: ActionsObservable<IAppAction>, store: Store<IAppState>, { }) => {
  return action$.ofType(todoListDataStateActions.DISPLAY_ITEMS)
    .mergeMap(() => {
      return Observable.of(displayItemsSuccess(MockTodoItems));
    }
    );
}
