import { History } from 'history';
import createHistory from 'history/createBrowserHistory';

const history: History = createHistory();

export const appHistory = (): History => {
  return history;
};
