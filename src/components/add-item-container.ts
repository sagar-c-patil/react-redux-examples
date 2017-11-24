import { IAppState } from "../store/state/app-state";
import { Dispatch } from "redux";
import { IToDoItem } from "../models/index";
import { addItem } from "../store/actions/index";
import { connect } from "react-redux";
import { AddItem } from "./index";


const mapStateToProps = (state:IAppState) =>{
  return {    
  }
};

const mapDispatchToProps = (dispatch:Dispatch<IAppState>)=>{
  return{
    addItem(item:IToDoItem){
      dispatch(addItem(item));
    }
  }
};

export const AddItemContainer = connect(mapStateToProps,mapDispatchToProps)(AddItem);