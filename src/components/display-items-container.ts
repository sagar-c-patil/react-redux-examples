import { IAppState } from "../store/state/app-state";
import { Dispatch } from "redux";
import { displayItems,setSelectedTodoItem } from "../store/actions/index";
import { connect } from "react-redux";
import { DisplayItems } from "./display-items";
import { IToDoItem } from "../models/index";


const mapStateToProps = (state: IAppState) => {
  return {
    items: state.todoListState.items    
  }
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
  return {
    displayItems() {
      dispatch(displayItems());
    },
    onSelectedItem(item:IToDoItem){
      dispatch(setSelectedTodoItem(item));
    }
  }
};

export const DisplayItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayItems);