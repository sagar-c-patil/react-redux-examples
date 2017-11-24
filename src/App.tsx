import * as React from 'react';
import './App.css';
import { ToDoList } from './pages/to-do-list';
import { Provider } from 'react-redux';
import { displayItems } from './store/actions/index';


class App extends React.Component<{ store: any }> {
  componentWillMount(){
    this.props.store.dispatch(displayItems());
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <ToDoList />
        </div>
      </Provider>
    );
  }
}

export default App;
