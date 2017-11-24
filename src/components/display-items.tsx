import * as React from 'react';
import { IToDoItem } from '../models/to-do-item';

export const NoItemsFound = () => {
  return (
    <span>No items available</span>
  );
}

export interface IDisplayItemsinterface {
  items: Array<IToDoItem>;
  onSelectedItem(item: IToDoItem): void;
}
export const DisplayItems = (props: IDisplayItemsinterface) => {

  if (props.items === null || props.items.length === 0)
    return <NoItemsFound />;

  const renderItems = () => {
    return props.items.map((item, index) => (
      <div key={index} onClick={() => props.onSelectedItem(item)}>
        <span>{item.title}</span>
        <span>  </span>
        <span>{item.description}</span>
      </div>
    ));
  };

  return (
    <div>{renderItems()}</div>
  )
}