import React, { Component } from 'react';

import '../../assets/styles/font-awesome/font-awesome.less';
import './pagination.less';

class Pagination extends Component {
    constructor (props) {
        super(props);

        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    getData () {
        const { data } = this.props;
        const { tasks } = data;
        const filtered = tasks.filter(task => task.obj_status === 'active');
        const length = filtered.length;
        const page = data.currentPage;
        const pages = Math.ceil(length / data.tasksPerPage);
        const isFirstPage = page === 1;
        const isLastPage = page === pages;

        return {
            page,
            pages,
            isFirstPage,
            isLastPage
        };
    }

    handlePrevClick () {
        const data = this.getData();
        const { page, isFirstPage } = data;

        return !isFirstPage && this.props.onClick(page - 1);
    }

    handleNextClick () {
        const data = this.getData();
        const { page, isLastPage } = data;

        return !isLastPage && this.props.onClick(page + 1);
    }

    render () {
        const data = this.getData();
        const { isFirstPage, isLastPage } = data;

        return (
            <div className="pagination">
                <span className="pages">page {data.page} of {data.pages}</span>
                <div className="arrows">
                    <i
                        className={`fa fa-chevron-left ${isFirstPage && 'disabled'}`}
                        aria-hidden="true"
                        onClick={this.handlePrevClick}
                    />
                    <i
                        className={`fa fa-chevron-right ${isLastPage && 'disabled'}`}
                        aria-hidden="true"
                        onClick={this.handleNextClick}
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;