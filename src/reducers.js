import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TasksReducer from './components/Tasks/TasksReducer';

export default combineReducers({
  tasks: TasksReducer,
  routing: routerReducer,
});
