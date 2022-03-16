import React from "react";


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', locked:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleChange(event) {    
          if (! this.state.locked) {
              this.setState({value: event.target.value});  }
          }
      handleSubmit(event) {
        if (! this.state.locked) {
            alert('A name was submitted: ' + this.state.value);
            this.setState({locked:true}) 
        }
        event.preventDefault();
    }

    render() {
      return (
        <div className="Task">
            <form className="TaskForm" onSubmit={this.handleSubmit}>
                <div className="TaskTitle">
                <label>
                    The Frog Task:
                </label>
                </div>
                <input type="text" name="name" className="TaskField" placeholder="buy milk" value={this.state.value} onChange={this.handleChange}/>
                <div className="TaskLock">
                    <input type="submit" value="Lock" />
                </div>
            </form>
        </div>
      );
    }
}


export default Task;