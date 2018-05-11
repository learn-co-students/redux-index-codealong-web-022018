import React, { Component } from 'react'

class Todo extends Component {
  render() {
  return(
    <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <p>
          <label>add todo</label>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
        </p>
        <input type="submit" />
      </form>
      /* code removed here */
    </div>
  );
}
};

export default Todo;
