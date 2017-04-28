import React, {Component} from 'react';
import PropTypes from 'prop-types'

const TextInput = ({text, label, updateText}) => (
  <div>
    <label>{label}</label>
    <input value={text} onChange={updateText} type="text"/>
  </div>
);

TextInput.propTypes = {
  text:       PropTypes.string.isRequired,
  label:      PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired
}


class Reverser extends Component {

  constructor(props) {
    super(props);

    this.updateForwards = this.updateForwards.bind(this);
    this.updateBackwards = this.updateBackwards.bind(this);

    this.state = {
      text: ''
    }
  }

  reverseText(text) {
    return(text.split('').reverse().join(''));
  }

  updateForwards(e) {
    const text = e.target.value;

    this.setState({text});
  }

  updateBackwards(e) {
    const text = this.reverseText(e.target.value);

    this.setState({text});
  }

  render() {
    const {text} = this.state;
    const reversedText = this.reverseText(text);

    const style = {
      margin: '20px'
    };

    return (
      <div style={style}>
        <TextInput 
          label="Forwards" 
          updateText={this.updateForwards} 
          text={text} 
        />
        <br/>
        <br/>
        <TextInput 
          label="Backwards" 
          updateText={this.updateBackwards} 
          text={reversedText}
        />
      </div>
    );
  }
}

export default Reverser;