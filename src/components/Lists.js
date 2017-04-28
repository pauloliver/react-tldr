import React, {Component} from 'react';

class Lists extends Component {

  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.clearList = this.clearList.bind(this);

    this.state = {
      listItems: ['these are', 'initial values'],
      inputValue: ''
    }
  }


  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addToList(e) {
    const listItems = [...this.state.listItems];
    listItems.push(this.state.inputValue);
    console.log(listItems);
    this.setState({
      listItems,
      inputValue: ''
    });
  }

  clearList() {
    this.setState({
      listItems: []
    });
  }

  renderListItem(listContent, key) {
    return (
      <li key={key}>
        {listContent}
      </li>
    );
  }

  render() {
    const { listItems } = this.state;

    return (
      <div>
        <h2>Lists</h2>
        <button onClick={this.clearList}>Clear List</button>
        <button onClick={this.addToList}>Add To List</button>
        <br/>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} />
        <ul>
          {listItems.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default Lists;