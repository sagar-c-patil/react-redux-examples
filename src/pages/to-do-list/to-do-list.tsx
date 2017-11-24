import * as React from 'react';
import { AddItemContainer } from '../../components/add-item-container';
import { DisplayItemsContainer } from '../../components/display-items-container';

export const ToDoList = () => {
  return (
    <div>
      To do list
      <AddItemContainer />
      <DisplayItemsContainer />
    </div>
  );
}