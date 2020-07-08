
import React from 'react';
import Papa from 'papaparse';
import Display from './dispatcherData';
import BookList from '../../imports/components/BookList';
import BookContextProvider from '../../imports/contexts/BookContext';

const DataDisplayed = props => {
    return <div>
    <p>test</p>
    <p>{props}</p>
  </div>
}

class Dispatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvfile: undefined,
      dataDisplayed: null,
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    const data = result.data;
    console.log(data);
  }

  render() {
    console.log("Render File data: ",this.state.csvfile);
    return (
      <div className="App">
        <h2>Import Schedule</h2>
        <input
          className="csv-input"
          type="file"
          style={{color: 'blue'}}
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        
        <button onClick={this.importCSV}> Import Schedule</button>
        <BookContextProvider>
          <BookList/>
        </BookContextProvider>
        
      </div>
    );
  }
}

export default Dispatcher;