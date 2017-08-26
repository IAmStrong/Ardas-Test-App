import React from 'react';
import PropTypes from 'prop-types';

class Editing extends React.Component {
  static propTypes = {
    task: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    updateTask: PropTypes.func.isRequired,
  };

  static defaultProps = {
    task: {},
    updateTask() {},
  };

  state = {
    isEditing: false,
    text: this.props.task.name,
  };

  handleClick = () => this.setState({ isEditing: true });

  handleChange = e => this.setState({ text: e.target.value });

  updateTask = () => {
    const { task: { id }, updateTask } = this.props;

    updateTask({ id, name: this.state.text });
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <th className="table_cell-head" colSpan="2">
        {this.state.isEditing
          ? <input
            className="editing"
            value={this.state.text}
            onChange={this.handleChange}
            onBlur={this.updateTask}
            autoFocus
          />
          : <span
            className="title"
            onClick={this.handleClick}
          >{this.props.task.name}</span>
        }
        <i className="fa fa-pencil-square-o" />
      </th>
    );
  }
}

export default Editing;
