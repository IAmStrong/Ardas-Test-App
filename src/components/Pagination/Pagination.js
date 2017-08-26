import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/font-awesome/font-awesome.less';
import './pagination.less';

class Pagination extends Component {
  static propTypes = {
    quantity: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    tasksPerPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    quantity: null,
    currentPage: 1,
    tasksPerPage: 10,
    changePage() {},
  };

  getPaginationData() {
    const { quantity, currentPage, tasksPerPage } = this.props;
    const pagesQuantity = Math.ceil(quantity / tasksPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesQuantity;

    return {
      currentPage,
      pagesQuantity,
      isFirstPage,
      isLastPage,
    };
  }

  handlePrevClick = () => {
    const data = this.getPaginationData();
    const { currentPage, isFirstPage } = data;
    return !isFirstPage && this.props.changePage(currentPage - 1);
  };

  handleNextClick = () => {
    const data = this.getPaginationData();
    const { currentPage, isLastPage } = data;
    return !isLastPage && this.props.changePage(currentPage + 1);
  };


  render() {
    const data = this.getPaginationData();
    const { isFirstPage, isLastPage, currentPage, pagesQuantity } = data;

    return (
      <div className="pagination">
        <span className="pages"> page {currentPage} of {pagesQuantity} </span>
        <div className="arrows">
          <i
            className={`fa fa-chevron-left ${isFirstPage && 'disabled'}`}
            onClick={this.handlePrevClick}
          />
          <i
            className={`fa fa-chevron-right ${isLastPage && 'disabled'}`}
            onClick={this.handleNextClick}
          />
        </div>
      </div>
    );
  }
}

export default Pagination;
