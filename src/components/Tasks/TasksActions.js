import tasksData from '../../data/tasks.json';

export const ADD = 'TASKS/ADD';
export const UPDATE = 'TASKS/updateTask';
export const CHANGE_PAGE = 'TASKS/CHANGE_PAGE';

export const fetchTasks = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.tasks.data.length) {
      return state.tasks;
    }
    return dispatch(addTasks(tasksData));
  };
};

export const addTasks = payload => ({
  type: ADD,
  payload,
});

export const updateTask = payload => ({
  type: UPDATE,
  payload,
});

export const changePage = payload => ({
  type: CHANGE_PAGE,
  payload,
});
