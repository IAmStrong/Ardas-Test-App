import React, { Component } from 'react';
import Moment from 'react-moment';

import './table.less';

class Table extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        this.props.selectTask(id);
    }

    generateRows () {
        const { tasks, currentPage, tasksPerPage } = this.props.data;

        const filtered = tasks.filter(task => task.obj_status === 'active');

        const lastRowIndex = currentPage * tasksPerPage;
        const firstRowIndex = lastRowIndex - tasksPerPage;
        const currentTasks = filtered.slice(firstRowIndex, lastRowIndex);

        return currentTasks.map((task) => {
            const isHighPriority = task.is_high_priority;
            const generateDate = () => {
                const date = task.due_date;
                const dateFormat = 'MM/DD/YYYY (hh:mm a)';

                return date ? <Moment format={dateFormat}>{date}</Moment> : '-';
            };

            return (
                <tr
                    className={isHighPriority ? 'table_row high_priority' : 'table_row'}
                    key={task.id}
                    onClick={() => this.handleClick(task.id)}
                >
                    <td className="table_cell">{task.name || '-'}</td>
                    <td className="table_cell">{task.tags || '-'}</td>
                    <td className="table_cell">{task.actual_effort || '-'}</td>
                    <td className="table_cell">{task.estimated_effort || '-'}</td>
                    <td className="table_cell">{generateDate()}</td>
                </tr>
            );
        });
    }

    render () {
        return (
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
                    {this.generateRows()}
                </tbody>
            </table>
        );
    }
}

export default Table;