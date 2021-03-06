import React, { PureComponent } from 'react';

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** function that allows for filtering contacts */
import filterContacts from './filterContacts';

import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      filteredContacts: filterContacts(''),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredContacts: filterContacts(event.target.value),
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Your social network contacts</h1>
          </header>
          <SearchInput
            textChange={this.handleSearchChange}
          />
          <SearchResults
            searchData={this.state.filteredContacts}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
