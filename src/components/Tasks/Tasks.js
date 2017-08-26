import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import { getCurentPageTasks, getCurrentPage, getTasksPerPage, getActiveTasksQuantity } from './TasksReducer';
import { fetchTasks, changePage } from './TasksActions';
import './tasks.less';
import '../../assets/styles/common.less';

// тут мы вытягиваем данные из редакса
const mapStateToProps = state => ({
  tasksQuantity: getActiveTasksQuantity(state),
  tasks: getCurentPageTasks(state),
  currentPage: getCurrentPage(state),
  tasksPerPage: getTasksPerPage(state),
});

// тут вытягиваем actions из редакса
const mapDispatchToProps = {
  fetchTasks: () => fetchTasks(),
  selectTask: id => push(`/tasks/${id}`),
  changePage: page => changePage(page),
};

// так подключаем редакс к реакту
// такое написание c @, это все равно, что connect(mapStateToProps, mapDispatchToProps)(Tasks)
@connect(mapStateToProps, mapDispatchToProps)
class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentPage: PropTypes.number,
    tasksPerPage: PropTypes.number,
    tasksQuantity: PropTypes.number,
    fetchTasks: PropTypes.func,
    changePage: PropTypes.func,
    selectTask: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchTasks();
  }

  changePage = page => this.props.changePage(page);

  selectTask = id => this.props.selectTask(id);

  render() {
    const { tasks, currentPage, tasksPerPage, tasksQuantity } = this.props;

    return (
      <div className="app-container">
        <div className="content-wrapper">
          <div className="table-wrapper">
            <Table
              currentPageTasks={tasks}
              tasksQuantity={tasksQuantity}
              currentPage={currentPage}
              tasksPerPage={tasksPerPage}
              changePage={this.changePage}
              selectTask={this.selectTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;

