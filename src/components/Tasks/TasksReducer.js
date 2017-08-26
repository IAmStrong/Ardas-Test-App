import { ADD, UPDATE, CHANGE_PAGE } from './TasksActions';

const initialState = {
  data: [],
  currentPage: 1,
  tasksPerPage: 10,
};

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case UPDATE: {
      const { name, id } = action.payload;
      return {
        ...state,
        data: state.data.map(t => (t.id === id ? { ...t, name } : t)),
      };
    }

    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const getActiveTasksQuantity = state => state.tasks.data.filter(task => task.obj_status === 'active').length;
export const getSelectedTask = (state, id) => state.tasks.data.find(task => String(task.id) === id);
export const getCurrentPage = state => state.tasks.currentPage;
export const getTasksPerPage = state => state.tasks.tasksPerPage;

export const getCurentPageTasks = (state) => {
  const tasks = state.tasks.data;
  const currentPage = state.tasks.currentPage;
  const tasksPerPage = state.tasks.tasksPerPage;

  const filtered = tasks.filter(task => task.obj_status === 'active');

  const lastRowIndex = currentPage * tasksPerPage;
  const firstRowIndex = lastRowIndex - tasksPerPage;
  return filtered.slice(firstRowIndex, lastRowIndex);
};

export default TasksReducer;

