import React from "react";


class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hours: '', minutes: '', locked:false};
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeHours(event) {    
      if (! this.state.locked) {
          this.setState({hours: event.target.value}); }
      }
  handleChangeMinutes(event) {    
      if (! this.state.locked) {
            this.setState({minutes: event.target.value}); }
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
        <div className="Timer">
            <form className="TimerForm" onSubmit={this.handleSubmit}>
                <label className="TimerTitle">
                    Timer:
                </label>
                    <input type="number" name="name" className="TimerHours" placeholder="hours" value={this.state.hours} onChange={this.handleChangeHours}/>
                    <input type="number" name="name" className="TimerMinutes" placeholder="minutes" value={this.state.minutes} onChange={this.handleChangeMinutes}/>
                <div>
                  <input type="submit" value="Lock" />
                </div>
            </form>
        </div>
      );
    }
}


export default Timer;