import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import Row from './Row';
import './table.less';

class Table extends Component {
  static propTypes = {
    currentPageTasks: PropTypes.arrayOf(PropTypes.object),
    currentPage: PropTypes.number,
    tasksPerPage: PropTypes.number,
    tasksQuantity: PropTypes.number,
    changePage: PropTypes.func,
    selectTask: PropTypes.func,
  };

  static defaultProps = {
    currentPageTasks: [],
    currentPage: 1,
    tasksPerPage: 10,
    tasksQuantity: 0,
    changePage() {},
    selectTask() {},
  };

  handleClick = (id) => {
    this.props.selectTask(id);
  };

  render() {
    const { currentPageTasks, currentPage, tasksPerPage, changePage, tasksQuantity } = this.props;

    return (
      <div>
        <table className="data-table">
          <thead>
            <tr className="table_row table_row-head">
              <th className="table_cell-head">Task Name</th>
              <th className="table_cell-head">Tags</th>
              <th className="table_cell-head">Actual Efforts</th>
              <th className="table_cell-head">Estimated Effort</th>
              <th className="table_cell-head">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPageTasks.map(task => (
              <Row
                task={task}
                handleClick={this.handleClick}
                key={task.id}
              />))}
          </tbody>
        </table>
        <Pagination
          quantity={tasksQuantity}
          currentPage={currentPage}
          tasksPerPage={tasksPerPage}
          changePage={changePage}
        />
      </div>
    );
  }
}

export default Table;
