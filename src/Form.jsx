import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {};

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.processVolTypeSelection = this.processVolTypeSelection.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  updateLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  processVolTypeSelection(e){
    this.setState({ volunteerType: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="ui container raised segment">
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" onChange={this.updateFirstName} />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" onChange={this.updateLastName} />
          </div>
          <div className="grouped fields">
            <label>What kind of volunteer are you?</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input className="volunteer-type" type="radio" name="volunteer-type" value="technical" onChange={this.processVolTypeSelection} />
                <label>I am a technical volunteer.</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input className="volunteer-type" type="radio" name="volunteer-type" value="non-technical" onChange={this.processVolTypeSelection} />
                <label>I am a non-technical volunteer.</label>
              </div>
            </div>
          </div>
          <button className="ui button" type="submit" onClick={this.submit}>Submit</button>
        </form>

        <div id="step-2">
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default Form;
