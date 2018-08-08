import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.save = this.save.bind(this);
  }
  edit() {
    this.setState({
      editing: true
    });
  }
  remove() {
    alert('Removing Note');
  }

  save() {
    alert(this._newText.value);
  }
  renderForm() {
    return (
      <div className="note">
        <form>
          <textarea ref={input => (this._newText = input)} />
          <button onClick={this.save}>Save</button>
        </form>
      </div>
    );
  }
  renderDisplay() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button id="edit" onClick={this.edit}>
            Edit
          </button>
          <button onClick={this.remove} id="remove">
            <FaTrash />
          </button>
        </span>
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}
export default Note;
