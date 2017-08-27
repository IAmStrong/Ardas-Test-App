import React from 'react';
import moment from 'moment';

import Editing from './Editing';
import '../../assets/styles/font-awesome/font-awesome.less';
import './task.less';

сonst Task = ({ task, updateTask, toMainPage }) => {
    const toDate = date => moment(date).format('MM/DD/YYYY (hh:mm a)').toString();

    return (
        <div className="task-info">
            <table className="task-table">
                <thead>
                    <tr className="table_row table_row-head">
                        <Editing
                            task={task}
                            updateTask={updateTask}
                        />
                    </tr>
                </thead>
                <tbody>
                    <tr className="table_row">
                        <td className="table_cell">id</td>
                        <td className="table_cell">{task.id}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">name</td>
                        <td className="table_cell">{task.name}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">actual_effort</td>
                        <td className="table_cell">{task.actual_effort}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">creation_date</td>
                        <td className="table_cell">{toDate(task.creation_date)}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">description</td>
                        <td className="table_cell">{task.description}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">due_date</td>
                        <td className="table_cell">{toDate(task.due_date)}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">estimated_effort</td>
                        <td className="table_cell">{task.estimated_effort}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">is_archived</td>
                        <td className="table_cell">{String(task.is_archived)}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">is_completed</td>
                        <td className="table_cell">{String(task.is_completed)}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">obj_status</td>
                        <td className="table_cell">{String(task.obj_status)}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">physical_progress</td>
                        <td className="table_cell">{task.physical_progress}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">project_id</td>
                        <td className="table_cell">{task.project_id}</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_cell">start_date</td>
                        <td className="table_cell">{toDate(task.start_date)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="info-back">
                <i className="fa fa-arrow-left" onClick={toMainPage}>
                    <span className="back">Back</span>
                </i>
            </div>
        </div>
    );
};

export default Task;