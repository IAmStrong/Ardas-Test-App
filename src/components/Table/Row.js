import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Row = ({ task, handleClick }) => {
  return (
    <tr
      className={task.is_high_priority ? 'table_row high_priority' : 'table_row'}
      onClick={() => handleClick(task.id)}
    >
      <td className="table_cell">{task.name || '-'}</td>
      <td className="table_cell">{task.tags || '-'}</td>
      <td className="table_cell">{task.actual_effort || '-'}</td>
      <td className="table_cell">{task.estimated_effort || '-'}</td>
      <td className="table_cell">
        {task.due_date
          ? <Moment format={'MM/DD/YYYY (hh:mm a)'}>{task.due_date}</Moment>
          : '-'
        }
      </td>
    </tr>
  );
};

Row.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    actual_effort: PropTypes.number,
    estimated_effort: PropTypes.number,
    due_date: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

Row.defaultProps = {
  task: {},
  handleClick() {},
};

export default Row;
