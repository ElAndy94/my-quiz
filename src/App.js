import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [ 
        'What is the most popular road in Manchester?',
        'What are we known in Manchester as?',
        'What is Manchester\'s symbol?',
        'Manchester\'s colours are?',
        'What is Manchester\'s Roman name?'
      ],
      answers: [ 
        'Portland Road',
        'Oxford Road',
        'Harbour Road',
        'Piccadilly Road',
        'Manchester Road',
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {

    // this.setState({
    //   selectedOption: event.target.value
    // });

    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({ [name]: value });
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.answer1);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Manchester Quiz
        </header>
          <div className="App-question">
            <h2 className="spacing-top-padding">{this.state.questions[0]}</h2>
            <form onSubmit={this.handleSubmit}>
              <label> {this.state.answers[0]}:
                <input name="answer" type="radio" className="spacing-top" value={this.state.answer1} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answers[1]}:
                <input name="answer" type="radio" className="spacing-top" value={this.state.answer2} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answers[2]}:
                <input name="answer" type="radio" className="spacing-top" value={this.state.answer3} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answers[3]}:
                <input name="answer" type="radio" className="spacing-top" value={this.state.answer4} onChange={this.handleInputChange} />
              </label>
              <label> {this.state.answers[4]}:
                <input name="answer" type="radio" className="spacing-top" value={this.state.answer5} onChange={this.handleInputChange} />
              </label>
              <input type="submit" className="spacing-top button-bottom" value="Submit" />
            </form>
          </div>
      </div>
    );
  }
}

export default App;
