import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: 'What is the most popular road in Manchester?',
      question2: 'What are we known in Manchester as?',
      question3: 'What is Manchester\'s symbol?',
      question4: 'Manchester\'s colours are?',
      question5: 'What is Manchester\'s Roman name?',
      answer1: 'Portland Road',
      answer2: 'Oxford Road',
      answer3: 'MidHarbour Road',
      answer4: 'Piccadilly Road',
      answer5: 'Manchester Road',
      // answer6: '',
      // answer7: '',
      // answer8: '',
      // answer9: '',
      // answer10: '',
      // answer11: '',
      // answer12: '',
      // answer13: '',
      // answer14: '',
      // answer15: '',
      // answer16: '',
      // answer17: '',
      // answer18: '',
      // answer19: '',
      // answer20: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.answer1);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Manchester Quiz
        </header>
          <div className="App-question">
            <h2 className="spacing-top-padding">{this.state.question1}</h2>
            <form onSubmit={this.handleSubmit}>
              <label> {this.state.answer1}:
                <input name="answer1" type="checkbox" className="spacing-top" checked={this.state.answer1} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answer2}:
                <input name="answer2" type="checkbox" className="spacing-top" checked={this.state.answer2} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answer3}:
                <input name="answer3" type="checkbox" className="spacing-top" checked={this.state.answer3} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answer4}:
                <input name="answer4" type="checkbox" className="spacing-top" checked={this.state.answer4} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answer5}:
                <input name="answer5" type="checkbox" className="spacing-top" checked={this.state.answer5} onChange={this.handleInputChange} />
              </label>
              <input type="submit" className="spacing-top" value="Submit" />
              {/* className="submit-top" */}
            </form>
          </div>
      </div>
    );
  }
}

export default App;
