import * as React from 'react';
import { IToDoItem } from '../models/index';

export interface IAddItemProps {
  addItem(item: IToDoItem): void;
}

export class AddItem extends React.Component<IAddItemProps, IToDoItem> {
  constructor(props: IAddItemProps) {
    super(props);
  }

  setTodoItemState(key: string, value: any) {
    this.setState({
      ...this.state,
      [key]: value
    }
    );
  }

  initState(): IToDoItem {
    return {
      id: '1',
      title: '',
      description: ''
    }
  }

  componentWillMount() {
    this.setState(this.initState());
  }

  addItem() {
    const toDoitem: IToDoItem = {
      id: '0',
      title: this.state.title,
      description: this.state.description
    }
    this.props.addItem(toDoitem);
  }
  render() {
    return (
      <div>
        <input type='text' placeholder='title' onChange={e => this.setTodoItemState('title', e.target.value)} />
        <input type='text' placeholder='description' onChange={e => this.setTodoItemState('description', e.target.value)} />
        <button onClick={() => this.addItem()}>ADD</button>
      </div>
    )
  }
}