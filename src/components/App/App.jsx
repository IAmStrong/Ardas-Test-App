import React from 'react';

import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';
import Task from '../Task';

import data from '../../data/tasks.json';

import '../../assets/styles/common.less';
import './app.less';

export default class App extends React.Component {
    constructor () {
        super();

        this.state = {
            tasks: data,
            currentPage: 1,
            tasksPerPage: 10,
            selectedTask: null
        };
    }

    changePage (page) {
        this.setState({
            currentPage: page
        });
    }

    showTask (id) {
        this.setState({
            selectedTask: id
        });
    }

    previousPage () {
        this.setState({
            selectedTask: null
        });
    }

    updateTask (id, name) {
        this.setState({
            tasks: name
            // tasks: this.state.tasks.map(task => (task.id === id ? Object.assign({}, name) : task))
        });
    }

    render () {
        const { tasks, selectedTask } = this.state;
        const task = tasks.find(_task => _task.id === selectedTask);

        return (
            <div className="app-container">
                <Header />
                <div className="content-wrapper">
                    {!selectedTask ?
                        <div className="table-wrapper">
                            <Table
                                data={this.state}
                                selectTask={this.showTask.bind(this)}
                            />
                            <Pagination
                                data={this.state}
                                onClick={this.changePage.bind(this)}
                            />
                        </div> :
                        <div className="task-wrapper">
                            <Task
                                task={task}
                                updateTask={this.updateTask}
                                toMainPage={this.previousPage}
                            />
                        </div>
                    }
                </div>
            </div>
        );
    }
}