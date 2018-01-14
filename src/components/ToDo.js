import React, {Component } from 'react';

class ToDo extends Component {
    render() {
        return (     
          <li>
            <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
            <span>{ this.props.description }.   <button type="delete" onClick={this.props.deleteTodo} /></span>
          </li>
        );
      }
}

export default ToDo;